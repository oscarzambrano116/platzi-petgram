import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

const DEFAULT_CATEGORIES = [1, 2, 3, 4, 5, 6]

const useCategoriesData = () => {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-api-oscarzambrano116.now.sh/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { loading, categories }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setshowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setshowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map((category) => (
          <Item key={category.id || category}>
            <Category {...category} loading={loading} />
          </Item>
        ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
