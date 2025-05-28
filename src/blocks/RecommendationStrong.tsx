interface Props {
  children: any
}

export function RecommendationStrong(props: Props) {
  return <span class="recommendation-strong self-end font-semibold opacity-80">{props.children}</span>
}
