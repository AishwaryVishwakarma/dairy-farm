import React from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const FORM_STATE = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up'
}

const SignInModal: React.FC<any> = ({ setIsModalOpen }) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false)

  const [formState, setFormState] = React.useState(FORM_STATE.SIGN_IN)

  const [loginForm, setLoginForm] = React.useState({
    login_email: '',
    login_password: ''
  })

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const SignIn = (
    <>
      <div className={styles.title}>Login</div>
      <p className={styles.description}>Sign in to your account</p>
      <form className={styles.inputSection} onSubmit={(e) => loginFormSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Email"
            autoComplete="on"
            name="login_email"
            id="login_email"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="on"
            name="login_password"
            id="login_password"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <div
            className={styles.eyeContainer}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <AiFillEyeInvisible className={styles.eyeIcon} />
            ) : (
              <AiFillEye className={styles.eyeIcon} />
            )}
          </div>
        </div>
        <p>Forgot Password?</p>
        <button type="submit" className={styles.login}>
          Login
        </button>
      </form>
      <div className={styles.signInOptions}>
        <p>----- OR -----</p>
        <div className={styles.socialMedia}>
          <div className={styles.imageContainer}>
            <img src="https://i.postimg.cc/x8sF8GBC/search.png" alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src="https://i.postimg.cc/x1FJ5kVz/facebook.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.signUpContainer}>
        <p>Don't have an account</p>
        <p
          onClick={() => {
            setFormState(FORM_STATE.SIGN_UP)
          }}
        >
          Sign Up
        </p>
      </div>
    </>
  )

  console.log(formState)

  return createPortal(
    <>
      <div
        className={styles.modalBackdrop}
        onClick={() => {
          setIsModalOpen(false)
        }}
      />
      <div className={styles.modalContent}>
        {formState === FORM_STATE.SIGN_IN ? SignIn : 'hello'}
      </div>
    </>,
    document.getElementById('sign-in-modal') as HTMLElement
  )
}

export default SignInModal
