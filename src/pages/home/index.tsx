import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import axios from 'axios'
import TodaysSpecial from '../../components/Home/TodaySpecial/TodaySpecial'

const HomePage: React.FC = () => {
  const [homeData, setHomeData] = React.useState([])

  React.useEffect(() => {
    axios
      .post('http://mywinkel.in/admin/api/home')
      .then((res) => setHomeData(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Layout>
      <HomeHero />
      <TodaysSpecial TSData={homeData?.todayspecial} />
    </Layout>
  )
}

export default HomePage
