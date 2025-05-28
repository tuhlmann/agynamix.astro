import { mergeProps, For } from "solid-js"
import { Tag } from "./Tag"

interface Props {
  tags: string[]
  withLink?: boolean
  invertBackground?: boolean
}

export function Tags(p: Props): any {
  const props = mergeProps({ withLink: false, invertedBackground: false }, p)
  return (
    <div class="flex flex-wrap mt-0 -mr-1 mb-0 -ml-1">
      <For each={props.tags}>
        {category => <Tag tag={category} withLink={props.withLink} invertBackground={props.invertBackground} />}
      </For>
    </div>
  )
}
