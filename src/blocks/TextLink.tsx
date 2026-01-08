import "./TextLink.css"
import classNames from "classnames"

interface Props {
  headerColor?: string
  to: string
  target?: string
  rel?: string
  className?: string
  children: any
}

export function TextLink(props: Props) {
  // transition ease-in delay-500
  return (
    <a
      class={classNames("text-link no-underline w-fit", props.className)}
      href={props.to}
      target={props.target}
      rel={props.rel}
    >
      {props.children}
    </a>
  )
}
