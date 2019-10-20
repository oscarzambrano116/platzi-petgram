import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
    </>
  )
}
