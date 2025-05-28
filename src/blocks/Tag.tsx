import { mergeProps } from "solid-js"
import { Dynamic } from "solid-js/web"
import { kebabCase } from "~/utils/kebab-case"

interface Props {
  tag: string
  withLink?: boolean
  invertBackground?: boolean
}

export function Tag(_props: Props) {
  const props = mergeProps({ withLink: false, invertBackground: false }, _props)

  return (
    <Dynamic
      component={props.withLink ? "a" : "span"}
      class="pt-[1px] pb-[1px] pr-2 pl-2 border-solid border-slate-200 border rounded-2xl text-xs m-[2px]"
      style={{ "background-color": props.invertBackground ? "#fff" : "var(--bg-color)" }}
      href={props.withLink ? `/tags/${kebabCase(props.tag)}/` : undefined}
    >
      {props.tag}
    </Dynamic>
  )
}
