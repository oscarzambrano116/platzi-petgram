import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = ''

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = '',
  emoji = '🐶',
  loading = false
}) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='' />
      {emoji}
    </Anchor>
  )
}
