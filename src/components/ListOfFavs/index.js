import React from 'react'
import {
  Grid,
  Image,
  Link
} from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    favs.map((fav) => {
      return (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} alt={fav.id} />
        </Link>
      )
    })
  )
}
