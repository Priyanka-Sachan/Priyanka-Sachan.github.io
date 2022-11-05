export default function Link(props) {
  return (
    <p className="relative group">
      {props.children}
      <span className="absolute bottom-2 left-0 w-0 h-1 bg-zinc-600 transition-all group-hover:w-20"></span>
    </p>
  )
}
