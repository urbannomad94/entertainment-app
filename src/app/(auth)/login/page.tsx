'use client'

import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  console.log(errors)

  return (
    <>
      <Image
        className={styles.logo}
        src='/logo.svg'
        alt='logo'
        width='32'
        height='26'
      ></Image>
      <div className={styles.container}>
        <h1 style={{ marginBottom: '40px', alignSelf: 'flex-start' }}>Login</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <div>
            <div className='errorContainer'>
              <input
                {...register('email', { required: `Can't be empty` })}
                type='email'
                placeholder='Email address'
              />
              <p className='errorMsg'>{errors.email?.message}</p>
            </div>
            <hr />
          </div>
          <div>
            <div className='errorContainer'>
              <input
                {...register('password', { required: `Can't be empty` })}
                type='text'
                placeholder='Password'
              />
              <p className='errorMsg'>{errors.password?.message}</p>
            </div>
            <hr />
          </div>
          <button className={styles.loginBtn}>Login to your account</button>
        </form>
        <p className={styles.subtitle}>
          Don&apos;t have an account?{' '}
          <Link href='/sign-up' className={styles.signUpLink + ' pointerHover'}>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  )
}
