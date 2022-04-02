import { createSignal, JSX, Show } from "solid-js"
import PlayIcon from "../blocks/PlayIcon"
import "./LandingInteractiveImage.css"
import { SimpleModal } from "./SimpleModal"

export function LandingInteractiveImage(): JSX.Element {
  const [showModal, setShowModal] = createSignal(false)

  const handlePlayClicked = (): void => {
    setShowModal(v => !v)
  }

  return (
    <>
      <div class="landing-image-wrap self-center">
        <img class="landing-image" src="/images/torsten_portrait.jpg" alt="Torsten Uhlmann" />
        <PlayIcon onClick={handlePlayClicked} />
      </div>
      <Show when={showModal()}>
        <SimpleModal onCloseRequest={() => setShowModal(false)}>
          <div class="landing-modal">
            <video controls autoplay>
              <source src="/media/Intro_Torsten_Uhlmann.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </SimpleModal>
      </Show>
    </>
  )
}
