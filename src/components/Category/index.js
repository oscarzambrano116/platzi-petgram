import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = ''

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = '',
  emoji = '🐶',
  loading = false,
  id = ''
}) => {
  return (
    <Link to={`/pet/${id}`}>
      <Image src={cover} alt='' />
      {emoji}
    </Link>
  )
}
