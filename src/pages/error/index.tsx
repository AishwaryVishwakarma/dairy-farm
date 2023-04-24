import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from './styles.module.scss'

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()

  const [timer, setTimer] = React.useState<number>(10)

  const decrementTimer = React.useCallback(() => {
    setTimer((oldTimer) => oldTimer - 1)
  }, [])

  React.useEffect(() => {
    if (timer <= 0) navigate('/')

    const timeoutFunction = setInterval(decrementTimer, 1000)

    return () => clearInterval(timeoutFunction)
  }, [decrementTimer, timer])

  return (
    <Layout>
      <div className={styles.errorWrapper}>
        <img src="https://i.postimg.cc/bvmrDR9X/error-page.png" />
        <div className={styles.textContainer}>
          <div className={styles.textHeading}>
            Oh no! The page doesn't exist
          </div>
          <div className={styles.subtext}>
            Redirecting back to <Link to="/">Homepage</Link> in {timer} seconds
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage
