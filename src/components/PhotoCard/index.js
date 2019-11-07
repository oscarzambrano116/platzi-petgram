import React, { useRef, useEffect, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import {
  ImgWrapper,
  Article,
  Img,
  Button
} from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id = '',
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const key = `like-${id}`
  const [like, setLike] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLike(!like)}>
              <Icon size={32} /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
