import React from 'react'
// import { useParams } from 'react-router-dom'
import { Container } from '../../Container'
import { TierDetail } from '../../../types/tier'
import { TierInfo } from './TierInfo'
import { TierCategories } from './TierCategories'

export const Tier = () => {
  // const { slug } = useParams()
  // console.log(slug)
  const tier: TierDetail = {
    title: 'Premier League Clubs Tier List',
    slug: 'premier-league-clubs',
    imageUrl: 'https://tiermaker.com/images/templates/21589054398.jpg',
    description:
      'What is the best Premier League Club? What Club is your favorite? Who do you hate?',
    categories: [
      {
        title: 'Love',
        color: 'red-500',
      },
      {
        title: 'Like',
        color: 'orange-500',
      },
      {
        title: 'Neutral',
        color: 'orange-200',
      },
      {
        title: 'Dislike',
        color: 'yellow-500',
      },
      {
        title: 'Hate',
        color: 'green-500',
      },
    ],
  }
  return (
    <Container>
      <TierInfo tier={tier} />
      <TierCategories categories={tier.categories} />
    </Container>
  )
}
