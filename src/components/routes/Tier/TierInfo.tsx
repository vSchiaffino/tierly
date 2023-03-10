import React from 'react'
import { TierDetail } from '../../../types/tier'
import { Heading } from '../../Heading'
import { Card } from '../../Card'

interface Props {
  tier: TierDetail
}

export const TierInfo: React.FC<Props> = ({ tier }) => {
  const { title, description, imageUrl } = tier
  return (
    <Card
      as="main"
      className="grid gap-10 lg:grid-cols-[1fr_auto] grid-cols-1 my-10 p-10"
    >
      <div className="flex flex-col gap-5">
        <Heading text={title} />
        <p className="text-lg text-slate-800">{description}</p>
      </div>
      <img
        src={imageUrl}
        alt={`Tier of ${title}`}
        className="mx-auto object-cover aspect-square flex-col"
      />
    </Card>
  )
}
