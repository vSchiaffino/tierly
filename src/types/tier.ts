// TODO fix confusin naming
export interface Tier {
  title: string
  imageUrl: string
  slug: string
}

export interface TierDetail extends Tier {
  description: string
  categories: Category[]
  // TODO must not be optional
  images?: string[]
}

export interface Category {
  id: number
  title: string
  color: string
  images: { id: number; src: string }[]
}
