import React from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios'
import Loading from '../commons/Loading/Loading'
import COUNTRIES from './CountryCode/CountryCode'
import { UtilityContext } from '../../App'

const FORM_STATE = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up'
}

const SignInModal: React.FC<any> = ({ setIsModalOpen }) => {
  const { isMobile } = React.useContext(UtilityContext)

  const [formState, setFormState] = React.useState(FORM_STATE.SIGN_IN)

  React.useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsModalOpen(false)
      }
    }
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [setIsModalOpen])

  // Sign in form
  const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false)

    const [loginForm, setLoginForm] = React.useState({
      login_email: '',
      login_password: ''
    })

    const togglePasswordVisibility = () => {
      setPasswordVisible((prevState) => !prevState)
    }

    const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    }

    const handleSigninInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const name = event.target.name
      const value = event.target.value
      setLoginForm((prevState) => {
        return {
          ...prevState,
          [name]: value
        }
      })
    }

    return (
      <>
        <div className={styles.title}>Login</div>
        <p className={styles.description}>Sign in to your account</p>
        <form className={styles.form} onSubmit={(e) => loginFormSubmit(e)}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              autoComplete="on"
              name="login_email"
              id="login_email"
              required
              onChange={(e) => handleSigninInputChange(e)}
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
              onChange={(e) => handleSigninInputChange(e)}
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
          <button type="submit" className={styles.submit}>
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
        <div className={styles.modalFooter}>
          <p>Don't have an account</p>
          <p
            className={styles.changeForm}
            onClick={() => {
              setFormState(FORM_STATE.SIGN_UP)
            }}
          >
            Sign Up
          </p>
        </div>
      </>
    )
  }

  // Sign up form
  const SignUp = () => {
    const [signupForm, setSignupForm] = React.useState({
      signup_name: '',
      signup_email: '',
      country_code: '+91',
      signup_number: '',
      signup_referral: '',
      signup_password: '',
      signup_terms: false
    })

    const [otp, setOtp] = React.useState<string>('')

    const [error, setError] = React.useState<string>('')

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const [isSuccess, setIsSuccess] = React.useState<boolean>(false)

    const handleSignupInputChange = (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      const name = event.target.name
      const value = event.target.value
      const type = event.target.type
      setSignupForm((prevState) => {
        if (type === 'checkbox') {
          return {
            ...prevState,
            [name]: !prevState.signup_terms
          }
        } else {
          return {
            ...prevState,
            [name]: value
          }
        }
      })
    }

    const signUpFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      setError('')
      const {
        signup_name: name,
        signup_email: email,
        country_code,
        signup_number,
        signup_password: password,
        signup_referral: referral_code
      } = signupForm ?? {}

      const date = new Date()

      const base64 = btoa(email + date.toString())

      axios
        .post('http://mywinkel.in/admin/api/register', {
          name,
          email: email.toLowerCase(),
          password: password.trim(),
          mobile: country_code + signup_number,
          referral_code,
          login_type: 'email',
          google_id: '',
          facebook_id: '',
          register_type: 'email',
          token: base64
        })
        .then((res) => {
          const response = res.data
          if (response.status === 0) {
            setError(response.message)
          } else {
            setIsSuccess(true)
          }
          setIsLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setIsLoading(false)
        })
    }

    return isSuccess ? (
      <div className={styles.otpScreen}>
        <p className={styles.description}>
          An email with an OTP has been sent to <b>{signupForm.signup_email}</b>
        </p>
        <p className={styles.description}>Kindly verify</p>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              style={{
                letterSpacing: '8px'
              }}
              type="text"
              placeholder="OTP"
              autoComplete="on"
              name="otp"
              id="otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.submit}>
            Verify
          </button>
        </form>
        <div className={styles.modalFooter}>
          <p className={styles.changeForm} onClick={() => setIsSuccess(false)}>
            Go Back
          </p>
        </div>
      </div>
    ) : (
      <>
        <div className={styles.title}>Sign Up</div>
        <p className={styles.description}>
          Create an Account so you can order your favorite food online
        </p>
        <form className={styles.form} onSubmit={(e) => signUpFormSubmit(e)}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="on"
              name="signup_name"
              id="signup_name"
              required
              value={signupForm.signup_name}
              onChange={(e) => handleSignupInputChange(e)}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              autoComplete="on"
              name="signup_email"
              id="signup_email"
              required
              value={signupForm.signup_email}
              onChange={(e) => handleSignupInputChange(e)}
            />
          </div>
          <div className={styles.inputContainer}>
            <select
              name="country_code"
              id="country_code"
              value={signupForm.country_code}
              onChange={(e) => handleSignupInputChange(e)}
            >
              {COUNTRIES.map((country, _idx) => (
                <option
                  data-countryCode={country.code}
                  value={country.mobileCode}
                >
                  {country.mobileCode} ({country.code})
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Mobile Number"
              autoComplete="on"
              name="signup_number"
              id="signup_number"
              required
              value={signupForm.signup_number}
              onChange={(e) => handleSignupInputChange(e)}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Referral Code (Optional)"
              name="signup_referral"
              id="signup_referral"
              value={signupForm.signup_referral}
              onChange={(e) => handleSignupInputChange(e)}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Password"
              name="signup_password"
              id="signup_password"
              required
              value={signupForm.signup_password}
              onChange={(e) => handleSignupInputChange(e)}
            />
          </div>
          <div className={styles.terms}>
            <input
              type="checkbox"
              name="signup_terms"
              id="signup_terms"
              required
              checked={signupForm.signup_terms}
              onChange={(e) => handleSignupInputChange(e)}
            />
            <label htmlFor="signup_terms">I accept terms & conditions</label>
          </div>
          <p className={styles.error}>{error.length > 0 && error}</p>
          <button type="submit" className={styles.submit}>
            {isLoading ? (
              <Loading
                color="#ffffff"
                height={25}
                width={25}
                loadingType="spinningBubbles"
              />
            ) : (
              'Sign Up'
            )}
          </button>
          <div className={styles.modalFooter}>
            <p>Already have an account?</p>
            <p
              className={styles.changeForm}
              onClick={() => {
                setFormState(FORM_STATE.SIGN_IN)
              }}
            >
              Sign In
            </p>
          </div>
        </form>
      </>
    )
  }

  return createPortal(
    <>
      <div
        className={styles.modalBackdrop}
        onClick={() => {
          setIsModalOpen(false)
        }}
      />
      <div className={styles.modalContent}>
        <div
          className={styles.close}
          onClick={() => {
            setIsModalOpen(false)
          }}
        >
          X
        </div>
        {formState === FORM_STATE.SIGN_IN ? <SignIn /> : <SignUp />}
      </div>
    </>,
    document.getElementById('sign-in-modal') as HTMLElement
  )
}

export default SignInModal
