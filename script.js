var slideshowDuration = 400000;
var slideshow = $('.main-content .slideshow');

function slideshowSwitch(slideshow, index, auto) {
    if (slideshow.data('wait')) return;

    var slides = slideshow.find('.slide');
    var pages = slideshow.find('.pagination');
    var activeSlide = slides.filter('.is-active');
    var newSlide = slides.eq(index);
    var newSlideContent = newSlide.find('.slide-content');
    var newSlideElements = newSlide.find('.caption > *');
    if (newSlide.is(activeSlide)) return;

    newSlide.addClass('is-new');
    var timeout = slideshow.data('timeout');
    clearTimeout(timeout);
    slideshow.data('wait', true);
    var transition = slideshow.attr('data-transition');
    if (transition == 'fade') {
        newSlide.css({
            display: 'block',
            zIndex: 2
        });
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({ display: '', zIndex: '' });
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait', false);
        if (auto) {
            timeout = setTimeout(function() {
                slideshowNext(slideshow, false, true);
            }, slideshowDuration);
            slideshow.data('timeout', timeout);
        }
    } else {
        if (newSlide.index() > activeSlide.index()) {
            var newSlideRight = 0;
            var newSlideLeft = 'auto';
            var newSlideContentLeft = 'auto';
            var newSlideContentRight = 0;
        } else {
            var newSlideRight = '';
            var newSlideLeft = 0;
            var newSlideContentLeft = 0;
            var newSlideContentRight = 'auto';
        }

        newSlide.css({
            display: 'block',
            width: 0,
            right: newSlideRight,
            left: newSlideLeft,
            zIndex: 2
        });
        newSlideContent.css({
            width: slideshow.width(),
            left: newSlideContentLeft,
            right: newSlideContentRight
        });

        TweenMax.set(newSlideElements, { y: 20, force3D: true });

        TweenMax.to(newSlide, 1, {
            width: slideshow.width(),
            ease: Power3.easeInOut
        });

        TweenMax.staggerFromTo(newSlideElements, 0.8, { alpha: 0, y: 60 }, { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 }, 0.1, function() {
            newSlide.addClass('is-active').removeClass('is-new');
            activeSlide.removeClass('is-active');
            newSlide.css({
                display: '',
                width: '',
                left: '',
                zIndex: ''
            });

            newSlideContent.css({
                width: '',
                left: ''
            });

            newSlideElements.css({
                opacity: '',
                transform: ''
            });

            slideshow.find('.pagination').trigger('check');
            slideshow.data('wait', false);
            if (auto) {
                timeout = setTimeout(function() {
                    slideshowNext(slideshow, false, true);
                }, slideshowDuration);
                slideshow.data('timeout', timeout);
            }
        });
    }
}

function slideshowNext(slideshow, previous, auto) {
    var slides = slideshow.find('.slide');
    var activeSlide = slides.filter('.is-active');
    var newSlide = null;
    if (previous) {
        newSlide = activeSlide.prev('.slide');
        if (newSlide.length === 0) {
            newSlide = slides.last();
        }
    } else {
        newSlide = activeSlide.next('.slide');
        if (newSlide.length == 0)
            newSlide = slides.filter('.slide').first();
    }

    slideshowSwitch(slideshow, newSlide.index(), auto);
}

function homeSlideshowParallax() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > windowHeight) return;
    var inner = slideshow.find('.slideshow-inner');
    var newHeight = windowHeight - (scrollTop / 2);
    var newTop = scrollTop * 0.8;

    inner.css({
        transform: 'translateY(' + newTop + 'px)',
        height: newHeight
    });
}

$(document).ready(function() {
    $('.slide').addClass('is-loaded');

    $('.slideshow .arrows .arrow').on('click', function() {
        slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
    });

    $('.slideshow .pagination .item').on('click', function() {
        slideshowSwitch($(this).closest('.slideshow'), $(this).index());
    });

    $('.slideshow .pagination').on('check', function() {
        var slideshow = $(this).closest('.slideshow');
        var pages = $(this).find('.item');
        var index = slideshow.find('.slides .is-active').index();
        pages.removeClass('is-active');
        pages.eq(index).addClass('is-active');
    });

    var timeout = setTimeout(function() {
        slideshowNext(slideshow, false, true);
    }, slideshowDuration);

    slideshow.data('timeout', timeout);
});

if ($('.main-content .slideshow').length > 1) {
    $(window).on('scroll', homeSlideshowParallax);
}

// For front slide
// --------------------------

var width, height, prevTime;
var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

width = window.innerWidth;
height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// ================
var Boid = function(ctx) {
    this.ctx = ctx;

    this.x = width * Math.random();
    this.y = height * Math.random();

    this.vx = 0;
    this.vy = 0;
};

Boid.prototype = {
    rad: 2,
    col: '#fff',

    update: function() {

    },

    draw: function() {
        this.ctx.fillStyle = this.col;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.closePath();
    }

};

// ================
var boids = [];
var randomAclX = [];
var randomAclY = [];
var isRandom = false;

var NUM_BOIDS = 30;
var NUM_BOIDS_EXC = NUM_BOIDS - 1;
var BOID_SIDE = 40;
var MAX_SPEED = 10;
var MAX_DIStANCE = 150;

init();
loop();

function init() {

    for (var i = 0; i < NUM_BOIDS; i++) {
        var boid = new Boid(ctx);

        boids.push(boid);
    }

    prevTime = +new Date;
    setTimeout(onRandomChange, 2000);
}

function onRandomChange() {
    isRandom = !isRandom;

    if (isRandom) {
        for (var i = 0; i < NUM_BOIDS; i++) {
            var aclX = 10 * (Math.random() - .5);
            var aclY = 10 * (Math.random() - .5);

            randomAclX[i] = aclX;
            randomAclY[i] = aclY;
        }

        setTimeout(onRandomChange, 1000);
    } else {
        setTimeout(onRandomChange, 2000);
    }
}



function loop() {
    var curTime = +new Date;
    var duration = (curTime - prevTime) / 1000;
    prevTime = curTime;

    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, width, height);

    for (var i = 0; i < boids.length; i++) {
        var b = boids[i];
        if (!isRandom) {
            rule1(i);
            rule2(i);
            rule3(i);
        } else {
            b.vx += randomAclX[i]
            b.vy += randomAclY[i];
        }

        var speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed >= MAX_SPEED) {
            var r = MAX_SPEED / speed;
            b.vx *= r;
            b.vy *= r;
        }

        if (!isRandom) {
            if (b.x < 0 && b.vx < 0 || b.x > width && b.vx > 0) b.vx *= -1;
            if (b.y < 0 && b.vy < 0 || b.y > height && b.vy > 0) b.vy *= -1;
        }


        b.x += b.vx;
        b.y += b.vy;

        if (isRandom) {
            if (b.x < 0) b.x += width;
            if (b.x > width) b.x -= width;

            if (b.y < 0) b.y += height;
            if (b.y > height) b.y -= height;
        }

    }

    for (var i = 0; i < boids.length; i++) {
        var boidA = boids[i];

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, .3)';
        ctx.arc(boidA.x, boidA.y, 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.closePath();


        for (var j = i; j < boids.length; j++) {
            var boidB = boids[j];
            var dx = boidA.x - boidB.x;
            var dy = boidA.y - boidB.y;

            var dis = Math.sqrt(dx * dx + dy * dy);

            if (dis < MAX_DIStANCE) {
                var alpha = (MAX_DIStANCE - dis) / MAX_DIStANCE;

                ctx.beginPath();
                ctx.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')';
                ctx.moveTo(boidA.x, boidA.y);
                ctx.lineTo(boidB.x, boidB.y);
                ctx.stroke();

                ctx.closePath();
            }
        }
    }


    requestAnimationFrame(loop);
}

function rule1(index) {
    var c = { x: 0, y: 0 };

    for (var i = 0; i < boids.length; i++) {

        if (i != index) {
            c.x += boids[i].x;
            c.y += boids[i].y;
        }
    }

    c.x = c.x / NUM_BOIDS_EXC;
    c.y = c.y / NUM_BOIDS_EXC;

    boids[index].vx += (c.x - boids[index].x) / 100;
    boids[index].vy += (c.y - boids[index].y) / 100;
}

function rule2(index) {
    for (var i = 0; i < boids.length; i++) {
        var d = getDistance(boids[i], boids[index]);
        if (d < BOID_SIDE) {
            boids[index].vx -= boids[i].x - boids[index].x;
            boids[index].vy -= boids[i].y - boids[index].y;
        }
    }
}

function rule3(index) {
    var pv = { x: 0, y: 0 };
    for (var i = 0; i < boids.length; i++) {
        if (i != index) {
            pv.x += boids[i].vx;
            pv.y += boids[i].vy;
        }
    }

    pv.x /= NUM_BOIDS_EXC;
    pv.y /= NUM_BOIDS_EXC;

    boids[index].vx += (pv.x - boids[index].vx) / 8;
    boids[index].vy += (pv.y - boids[index].vy) / 8;
}

function getDistance(p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;