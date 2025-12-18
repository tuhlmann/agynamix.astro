import { createSignal, Show } from "solid-js"
import PlayIcon from "../blocks/PlayIcon"
import { SimpleModal } from "./SimpleModal"
import type { Locale } from "../i18n/types"
import { t } from "../i18n/t"

export function LandingInteractiveImage(props: { lang?: Locale }) {
  const [showModal, setShowModal] = createSignal(false)

  const lang: Locale = props.lang ?? "en"

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
              {t(lang, "video.unsupported")}
            </video>
          </div>
        </SimpleModal>
      </Show>
    </>
  )
}
