import { createSignal, Show } from "solid-js"
import PlayIcon from "../blocks/PlayIcon"
import { SimpleModal } from "./SimpleModal"

export function LandingInteractiveImage() {
  const [showModal, setShowModal] = createSignal(false)

  const handlePlayClicked = (): void => {
    setShowModal(v => !v)
  }

  return (
    <>
      <div class="relative self-center">
        <img class="landing-image max-h-[70vh]" src="/images/torsten_portrait.jpg" alt="Torsten Uhlmann" />
        <PlayIcon onClick={handlePlayClicked} />
      </div>
      <Show when={showModal()}>
        <SimpleModal onCloseRequest={() => setShowModal(false)}>
          <div class="p-0">
            <video class="block max-w-full h-auto" controls autoplay>
              <source src="/media/Intro_Torsten_Uhlmann.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </SimpleModal>
      </Show>
    </>
  )
}
