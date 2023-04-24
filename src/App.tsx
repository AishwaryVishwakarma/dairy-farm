import React from 'react'
import { type Utility } from './model'
import './App.css'
import useMediaQuery from './hooks/useMediaQuery'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/error'
import RootLayout from './components/RootLayout/RootLayout'
import HomePage from './pages/home'
import ProductPage from './pages/product'

export const UtilityContext = React.createContext<Utility>({
  isMobile: false
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {path: ":id", element: <ProductPage />},
      { path: '*', element: <ErrorPage /> }
    ]
  }
])

const App: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <UtilityContext.Provider value={{ isMobile }}>
      <RouterProvider router={router} />
    </UtilityContext.Provider>
  )
}

export default App
