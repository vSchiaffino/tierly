import React from 'react'
import { Tier } from '../../../types/tier'
import { Link } from 'react-router-dom'

interface Props {
  tier: Tier
}

export const TierGridItem: React.FC<Props> = ({ tier }) => {
  return (
    <li className="bg-slate-100 rounded-lg shadow-sm cursor-pointer">
      <Link to={`/tiers/${tier.slug}`}>
        <img
          className="aspect-square object-cover rounded-lg"
          src={tier.imageUrl}
          alt={`Tier of ${tier.title}`}
        />
        <h3 className="text-xl mx-2">{tier.title}</h3>
      </Link>
    </li>
  )
}
