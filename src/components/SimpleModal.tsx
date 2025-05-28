import { createEffect, onCleanup } from "solid-js"
import "./SimpleModal.css"

interface Props {
  onCloseRequest: () => void
  children: any
}

function handleKeyUp(onCloseRequest: () => void) {
  return function (e: KeyboardEvent): void {
    const keys: any = {
      27: () => {
        e.preventDefault()
        onCloseRequest()
        window.removeEventListener("keyup", handleKeyUp(onCloseRequest), false)
      },
    }

    if (keys[e.keyCode]) {
      keys[e.keyCode]()
    }
  }
}

function clickOutside(element: Element, accessor: () => any): void {
  const onClick = (e: any): void => !element.contains(e.target) && accessor()?.()
  document.body.addEventListener("click", onClick)

  onCleanup(() => document.body.removeEventListener("click", onClick))
}

export function SimpleModal(props: Props) {
  createEffect(() => {
    window.addEventListener("keyup", handleKeyUp(props.onCloseRequest), false)
  })

  onCleanup(() => {
    window.removeEventListener("keyup", handleKeyUp(props.onCloseRequest), false)
  })

  return (
    <div class="simple-modal-wrap">
      <div class="simple-modal bg-white w-full sm:max-w-[500px]" use:clickOutside={() => props.onCloseRequest()}>
        <div>{props.children}</div>
      </div>

      <button type="button" class="simple-modal-button" onClick={() => props.onCloseRequest()} />
    </div>
  )
}
