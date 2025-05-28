/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
import stripIndent from "strip-indent"
import slugify from "@sindresorhus/slugify"
import { format } from "date-fns"

enum DateFormat {
  MonthAndYear = "MMM yyyy",
}

export enum AllowedCategories {
  Client = "client",
  Resume = "resume",
  Product = "product",
  Training = "training",
  Publication = "publication",
  Education = "education",
}

export enum Alignment {
  Left = "left",
  Right = "right",
}

export interface Recommendation {
  title: string
  date: string
  by: string
  link?: string
  description?: string
}

export interface ImageElement {
  image: string
  description: string
  align?: Alignment
}

export interface StoryData {
  position: string
  client: string
  logo?: string
  start: string
  end?: string
  short?: string // short description
  description: string
  slug?: string
  link?: string
  tags: string[]
  categories: string[] // area of website
  recommendations?: Recommendation[]
  images?: ImageElement[]
}

interface WithDate {
  start: string
}

// collection
export interface MarkdownFrontmatter {
  date: number
  description: string
  title: string
  tags?: string[]
  url: string
}

export function prepareData(client: StoryData) {
  return {
    // defaults
    ...client,

    // overrides
    position: stripIndent(client.position || ""),
    client: stripIndent(client.client || ""),
    slug: slugify(`${client.start}${client.client || ""}`),
    short: client.short ? stripIndent(client.short) : undefined,
    description: stripIndent(client.description || ""),
    tags: client.tags || [],
    recommendations: (client.recommendations && client.recommendations.map(prepareRecommendation)) || undefined,
    images: (client.images && client.images.map(prepareImage)) || undefined,
  }
}

function prepareRecommendation(recommendation: Recommendation): Recommendation {
  return {
    ...recommendation,

    title: stripIndent(recommendation.title || ""),
    description: stripIndent(recommendation.description || ""),
  }
}

function prepareImage(image: ImageElement): ImageElement {
  return {
    ...image,

    description: stripIndent(image.description || ""),
  }
}

export function sortByDate(a: WithDate, b: WithDate) {
  return moreRecent(a.start, b.start) ? -1 : 1
}

// returns true if a is more recent than b
function moreRecent(a: string, b: string) {
  return new Date(a).getTime() > new Date(b).getTime()
}

export function formatDateMMYYY(date: string): string {
  const d = new Date(date)
  return format(d, DateFormat.MonthAndYear)
}

export function formatDate(date?: any) {
  if (!date) {
    return "ongoing"
  }
  return new Date(date).toUTCString().replace(/(\d\d\d\d) .*/, "$1") // remove everything after YYYY
}
