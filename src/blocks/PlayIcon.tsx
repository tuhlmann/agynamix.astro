import { JSX } from "solid-js"
import "./PlayIcon.css"

interface Props {
  onClick: () => void
}

export default function PlayIcon(props: Props): JSX.Element {
  const { onClick } = props
  // const [count, setCount] = createSignal(0);
  // const add = () => setCount(count() + 1);
  // const subtract = () => setCount(count() - 1);

  return (
    <div class="play-icon fill-gray-300" onClick={onClick}>
      <svg
        class="play-icon-svg"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        height="96"
        width="96"
        viewBox="0 0 24 24"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
      </svg>
    </div>
  )
}
