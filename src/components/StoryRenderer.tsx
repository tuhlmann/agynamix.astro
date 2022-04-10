/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable solid/no-innerhtml */
import { compareAsc, parseISO, subYears } from "date-fns"
import { mergeProps, For, createSignal, createMemo } from "solid-js"
import { JSX } from "solid-js/jsx-runtime"
// import SolidMarkdown from "solid-markdown"
import Converter from "showdown"
import {
  Alignment,
  AllowedCategories,
  formatDate,
  ImageElement,
  Recommendation,
  StoryData,
} from "../utils/prepare-story-data"
import { TextLink } from "../blocks/TextLink"
import { RecommendationStrong } from "../blocks/RecommendationStrong"
import { Tags } from "~/blocks/Tags"

interface Props {
  story: StoryData[]
  withDescription?: boolean
  withImages?: boolean
  categories?: AllowedCategories[]
  yearsBack?: number
  more?: string
  less?: string
}

function renderClientImage(url?: string, img?: string): JSX.Element | null {
  if (img) {
    const i = <img class="mb-0 min-w-[200px] max-w-[200px]" src={img} />
    if (url) {
      return (
        <div class="self-center sm:self-start">
          <a class="text-inherit" href={url}>
            {i}
          </a>
        </div>
      )
    }
    return <div class="self-center sm:self-start">{i}</div>
  }
  return null
}

function renderRecommendation(converter: Converter.Converter, recommendation: Recommendation): JSX.Element {
  const { title, link, by, date, description } = recommendation
  const titleElem = link ? (
    <TextLink to={link}>
      <RecommendationStrong>{title}</RecommendationStrong>
    </TextLink>
  ) : (
    <RecommendationStrong>{title}</RecommendationStrong>
  )

  const niceDate = date ? formatDate(date) : undefined

  return (
    <>
      {titleElem}
      {description && <div innerHTML={converter.makeHtml(description)}></div>}
      {by && (
        <RecommendationStrong>
          <span>{by}</span>
          {niceDate && <span class="date">, {niceDate}</span>}
        </RecommendationStrong>
      )}
    </>
  )
}

function renderRecommendations(converter: Converter.Converter, recommendations?: Recommendation[]): JSX.Element {
  {
    if (!recommendations?.length) {
      return null
    }

    return (
      <div class="mt-5 text-base">
        <h4 class="m-0 uppercase opacity-60 text-sm leading-9 tracking-wide">Recommendations</h4>
        <ul class="list-none m-0">
          <For each={recommendations}>
            {r => (
              <li class="flex items-center justify-between m-0 mb-3 mt-5">
                <div class="flex flex-col w-full">{renderRecommendation(converter, r)}</div>
              </li>
            )}
          </For>
        </ul>
      </div>
    )
  }
}

function renderImage(converter: Converter.Converter, imageElement: ImageElement): JSX.Element {
  const { image, align, description } = imageElement
  const imgEl = (
    <div class="pt-0 pb-0 pl-[5px] pr-[5px]">
      <img class="mb-0 max-w-[350px]" src={image} />
    </div>
  )
  const txt = (
    <div class="pt-0 pb-0 pl-[5px] pr-[5px]">
      {description && <div innerHTML={converter.makeHtml(description)}></div>}
    </div>
  )

  return align && align === Alignment.Right ? (
    <>
      {txt}
      {imgEl}
    </>
  ) : (
    <>
      {imgEl}
      {txt}
    </>
  )
}

function renderImages(converter: Converter.Converter, images?: ImageElement[]): JSX.Element | null {
  {
    if (!images?.length) {
      return null
    }

    return (
      <div class="mt-5 text-base">
        <ul class="list-none m-0">
          <For each={images}>
            {i => (
              <li class="flex items-center justify-between m-0 mb-3 mt-5">
                <div class="flex w-full justify-between flex-col sm:flex-row">{renderImage(converter, i)}</div>
              </li>
            )}
          </For>
        </ul>
      </div>
    )
  }
}

export default function StoryRenderer(p: Props): JSX.Element {
  const converter = new Converter.Converter()

  const props = mergeProps({ withDescription: false, withImages: true, yearsBack: 100 }, p)

  const [renderAll, setRenderAll] = createSignal(false)

  // Let me know if Metusalem wants to use it
  const renderUntil = createMemo(() => subYears(new Date(), props.yearsBack))
  const allElements = createMemo(() =>
    props.story.filter(c => !props.categories || props.categories.some(v => c.categories.includes(v))),
  )

  const limitedElements = createMemo(() =>
    allElements().filter(c => {
      const endDate = parseISO(c.end)
      return compareAsc(endDate, renderUntil()) > -1
    }),
  )
  const renderElements = createMemo(() => (renderAll() ? allElements() : limitedElements()))

  return (
    <>
      <For each={renderElements()}>
        {({
          position,
          client,
          logo: img,
          start,
          end,
          slug,
          short,
          description,
          link,
          tags,
          recommendations,
          images,
        }) => {
          const niceStart = formatDate(start)
          const niceEnd = formatDate(end)
          return (
            <div class="bg-white rounded-lg p-10 mb-5">
              <div class="flex justify-between items-start sm:items-center flex-col-reverse sm:flex-row">
                <div class="self-center sm:self-start">
                  <h2 class="text-center sm:text-left mr-1 flex-1 mb-3 sm:m-0">
                    <a class="text-inherit" href={`#${slug}`} id={slug}>
                      {position}
                    </a>
                  </h2>
                  <h4 class="text-center sm:text-left m-0 uppercase opacity-60 text-sm leading-9 tracking-wide">
                    {client};
                    <small>
                      {" "}
                      {niceStart} -&gt; {niceEnd}
                    </small>
                  </h4>
                </div>
                {renderClientImage(link, img)}
              </div>
              <div class="hidden invisible sm:block sm:visible">
                <Tags tags={tags} />
              </div>
              {props.withDescription ? (
                <>
                  <hr class="my-5 mx-0 opacity-50" />
                  <div class="mt-5 text-base">
                    <div innerHTML={converter.makeHtml(description)}></div>
                  </div>
                </>
              ) : (
                short && (
                  <>
                    <div class="mt-5 text-base">
                      <div innerHTML={converter.makeHtml(short)}></div>
                    </div>
                  </>
                )
              )}
              {renderRecommendations(converter, recommendations)}
              {props.withImages && renderImages(converter, images)}

              {/* {!isEmpty(deliveries) && <h4>Presentations</h4>}
              <ul>
                {deliveries.map((delivery, index) => (
                  <li key={index}>
                    <div
                      css={{
                        display: "flex",
                        alignItems: "center",
                        "& > p": {marginBottom: 0}
                      }}
                    >
                      <SolidMarkdown children={delivery.event} />
                      {delivery.recording ? (
                        <a css={{fontSize: "0.8rem", marginLeft: 10}} href={delivery.recording}>
                          <span role="img" aria-label="recording">
                            📺
                          </span>
                        </a>
                      ) : null}
                    </div>
                    <time>{delivery.date}</time>
                  </li>
                ))}
              </ul>
              {!isEmpty(resources) && <h4>Resources</h4>}
              <ul>
                {resources.map((resource, i) => (
                  <li key={i}>
                    <SolidMarkdown children={resource} />
                  </li>
                ))}
              </ul> */}
            </div>
          )
        }}
      </For>
      {!renderAll() && allElements().length > limitedElements().length && (
        <div class="flex">
          <button
            class="m-auto bg-green-600 hover:bg-gray-700 text-gray-100 rounded pt-2 pb-2 pr-4 pl-4 transition ease-in-out delay-100"
            type="button"
            onClick={() => setRenderAll(true)}
          >
            {props.more || "Show More"}
          </button>
        </div>
      )}
      {renderAll() && allElements().length > limitedElements().length && (
        <div class="flex">
          <button
            class="m-auto bg-green-600 hover:bg-gray-700 text-gray-100 rounded pt-2 pb-2 pr-4 pl-4 transition ease-in-out delay-100"
            type="button"
            onClick={() => setRenderAll(false)}
          >
            {props.less || "Show Less"}
          </button>
        </div>
      )}
    </>
  )
}
