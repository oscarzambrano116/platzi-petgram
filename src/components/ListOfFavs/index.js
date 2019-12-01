import React from 'react'
import PropTypes from 'prop-types'
import {
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
