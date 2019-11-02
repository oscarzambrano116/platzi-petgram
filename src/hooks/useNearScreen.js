import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

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

  return [show, element]
}
