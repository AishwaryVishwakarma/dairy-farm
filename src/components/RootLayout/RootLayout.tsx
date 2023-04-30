import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SignInModal from '../SignInModal/SignInModal'

const RootLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  // React.useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = 'unset'
  //   }
  // }, [isModalOpen])

  return (
    <>
      <Navbar setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <SignInModal setIsModalOpen={setIsModalOpen} />}
      <Outlet />
    </>
  )
}

export default RootLayout
