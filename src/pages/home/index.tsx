import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import axios from 'axios'
import TodaysSpecial from '../../components/Home/TodaySpecial/TodaySpecial'
import RecommendedItems from '../../components/Home/RecommendedItems/RecommendedItems'

const HomePage: React.FC = () => {
  const [homeData, setHomeData] = React.useState<any>([])

  React.useEffect(() => {
    axios
      .post('http://mywinkel.in/admin/api/home')
      .then((res) => setHomeData(res.data))
      .catch((err) => console.log(err))
  }, [])

  console.log(homeData)

  return (
    <Layout>
      <HomeHero />
      <TodaysSpecial TSData={homeData?.todayspecial} />
      <RecommendedItems RIData={homeData?.recommendeditems} />
    </Layout>
  )
}

export default HomePage
