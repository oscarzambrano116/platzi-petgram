import React, { useRef, useEffect, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
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
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (e) {
      return false
    }
  })

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        console.log(isIntersecting)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
      return () => observer.unobserve()
    })
  }, [element])

  return (
    <Article ref={element}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size={32} /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
