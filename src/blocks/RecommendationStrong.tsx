import { JSX } from "solid-js"

interface Props {
  children: any
}

export function RecommendationStrong(props: Props): JSX.Element {
  return <span class="recommendation-strong self-end font-semibold opacity-80">{props.children}</span>
}
