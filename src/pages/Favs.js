import React from 'react'
import { Helmet } from 'react-helmet'
import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout
      title='Your favs'
      subtitle='your favorites pet pictures'
    >
      <FavsWithQuery />
    </Layout>
  )
}
