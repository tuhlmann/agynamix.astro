import { createUniqueId } from "solid-js"

type Props = {
  width?: number | string
  height?: number | string
  class?: string
  "aria-hidden"?: boolean | "true" | "false"
}

export default function FlagUS(props: Props) {
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
        <rect width="22" height="14" fill="#FFFFFF" />

        {/* red stripes (7 of 13) */}
        <g fill="#B22234">
          <rect y="0" width="22" height="1.0769" />
          <rect y="2.1538" width="22" height="1.0769" />
          <rect y="4.3077" width="22" height="1.0769" />
          <rect y="6.4615" width="22" height="1.0769" />
          <rect y="8.6154" width="22" height="1.0769" />
          <rect y="10.7692" width="22" height="1.0769" />
          <rect y="12.9231" width="22" height="1.0769" />
        </g>

        {/* canton */}
        <rect x="0" y="0" width="9.5333" height="7.5385" fill="#3C3B6E" />

        {/* simplified stars as dots (reads well at small sizes) */}
        <g fill="#FFFFFF" opacity="0.95">
          <circle cx="1.2" cy="1.0" r="0.30" />
          <circle cx="2.9" cy="1.0" r="0.30" />
          <circle cx="4.6" cy="1.0" r="0.30" />
          <circle cx="6.3" cy="1.0" r="0.30" />
          <circle cx="8.0" cy="1.0" r="0.30" />

          <circle cx="2.05" cy="2.05" r="0.30" />
          <circle cx="3.75" cy="2.05" r="0.30" />
          <circle cx="5.45" cy="2.05" r="0.30" />
          <circle cx="7.15" cy="2.05" r="0.30" />

          <circle cx="1.2" cy="3.1" r="0.30" />
          <circle cx="2.9" cy="3.1" r="0.30" />
          <circle cx="4.6" cy="3.1" r="0.30" />
          <circle cx="6.3" cy="3.1" r="0.30" />
          <circle cx="8.0" cy="3.1" r="0.30" />

          <circle cx="2.05" cy="4.15" r="0.30" />
          <circle cx="3.75" cy="4.15" r="0.30" />
          <circle cx="5.45" cy="4.15" r="0.30" />
          <circle cx="7.15" cy="4.15" r="0.30" />

          <circle cx="1.2" cy="5.2" r="0.30" />
          <circle cx="2.9" cy="5.2" r="0.30" />
          <circle cx="4.6" cy="5.2" r="0.30" />
          <circle cx="6.3" cy="5.2" r="0.30" />
          <circle cx="8.0" cy="5.2" r="0.30" />

          <circle cx="2.05" cy="6.25" r="0.30" />
          <circle cx="3.75" cy="6.25" r="0.30" />
          <circle cx="5.45" cy="6.25" r="0.30" />
          <circle cx="7.15" cy="6.25" r="0.30" />
        </g>
      </g>
    </svg>
  )
}
