import React from 'react'
import { Heading } from '../../Heading'
import { Container } from '../../Container'
import { TierGrid } from './TierGrid'

export const Tiers = () => {
  return (
    <Container className="mt-5">
      <Heading text="The best Tier List" />
      <TierGrid />
    </Container>
  )
}
