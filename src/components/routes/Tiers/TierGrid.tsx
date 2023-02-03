import React from 'react'
import { Tier } from '../../../types/tier'
import { TierGridItem } from './TierGridItem'

export const TierGrid = () => {
  const tierList: Tier[] = [
    {
      title: 'Premier League Clubs',
      imageUrl: 'https://tiermaker.com/images/templates/21589054398.jpg',
    },
    {
      title: 'football teams like or not',
      imageUrl: 'https://tiermaker.com/images/templates/4193151590920015.jpg',
    },
    {
      title: 'Best football players',
      imageUrl: 'https://tiermaker.com/images/templates/161721555723051.jpg',
    },
    {
      title: 'NFL Teams (2022 Logos)',
      imageUrl:
        'https://tiermaker.com/images/templates/nfl-teams-2022-commanders-updated-18028/180281644183508.png',
    },
    {
      title: 'NBA',
      imageUrl: 'https://tiermaker.com/images/templates/21589054138.jpg',
    },
    {
      title: 'NHL Teams',
      imageUrl: 'https://tiermaker.com/images/templates/21589053934.jpg',
    },
    {
      title: 'FNaF Characters',
      imageUrl: 'https://tiermaker.com/images/templates/1061544281421.png',
    },
    {
      title: 'Ultimate Video Games (2022)',
      imageUrl: 'https://tiermaker.com/images/templates//6461251627706782.jpeg',
    },
  ]
  return (
    <ul className="mt-5 grid gap-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
      {tierList.map((tier) => (
        <TierGridItem tier={tier} key={tier.title} />
      ))}
    </ul>
  )
}
