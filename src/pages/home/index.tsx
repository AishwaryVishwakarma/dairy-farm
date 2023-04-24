import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import NewlyAdded from '../../components/NewlyAdded/NewlyAdded'

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      <NewlyAdded/>
    </Layout>
  )
}

export default HomePage
