export interface Tier {
  title: string
  imageUrl: string
  slug: string
}

export interface TierDetail extends Tier {
  description: string
}
