import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => {
  return (
    <Layout
      title='Your favs'
      subtitle='your favorites pet pictures'
    >
      <FavsWithQuery />
    </Layout>
  )
}

export default Favs
