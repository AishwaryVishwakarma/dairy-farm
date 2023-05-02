import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import axios from 'axios'
import Testimonials from '../../components/Home/Testimonials/Testimonials'
import ProductsSection from '../../components/commons/ProductsSection/ProductsSection'

const HomePage: React.FC = () => {
  const [homeData, setHomeData] = React.useState<any>([])

  React.useEffect(() => {
    axios
      .post('http://mywinkel.in/admin/api/home')
      .then((res) => {
        setHomeData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Layout>
      <HomeHero />
      <ProductsSection
        type="todays-special"
        data={homeData?.todayspecial}
        sectionData={{
          heading: "Today's Special 📅",
          description:
            "Today's special: a delicious deal you won't want to miss!"
        }}
      />
      <ProductsSection
        type="recommended-items"
        data={homeData?.recommendeditems}
        sectionData={{
          heading: 'Recommended Items 🎯',
          description:
            'Discover your new favorites with our hand-picked recommended items!'
        }}
      />
      <ProductsSection
        type="trending-items"
        data={homeData?.trendingitems}
        sectionData={{
          heading: 'Trending Items 🔥',
          description:
            'Stay ahead of the curve with the hottest trending items!'
        }}
      />
      <Testimonials testimonialData={homeData?.testimonials} />
    </Layout>
  )
}

export default HomePage
