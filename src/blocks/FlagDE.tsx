import { createUniqueId } from "solid-js"

type Props = {
  width?: number | string
  height?: number | string
  class?: string
  "aria-hidden"?: boolean | "true" | "false"
}

export default function FlagDE(props: Props) {
  const clipId = createUniqueId()
  const width = props.width ?? 22
  const height = props.height ?? 14

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 14"
      class={props.class}
      aria-hidden={props["aria-hidden"]}
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="22" height="14" rx="2" />
        </clipPath>
      </defs>
      <g clip-path={`url(#${clipId})`}>
        <rect width="22" height="14" fill="#000000" />
        <rect y="4.6667" width="22" height="4.6666" fill="#DD0000" />
        <rect y="9.3333" width="22" height="4.6667" fill="#FFCE00" />
      </g>
    </svg>
  )
}
