import { JSX } from "solid-js/jsx-runtime"
import "./TextLink.css"
import classNames from "classnames"

interface Props {
  headerColor?: string
  to: string
  className?: string
  children: JSX.Element
}

export function TextLink(props: Props): JSX.Element {
  // transition ease-in delay-500
  return (
    <a class={classNames("text-link no-underline w-fit", props.className)} href={props.to}>
      {props.children}
    </a>
  )
}
