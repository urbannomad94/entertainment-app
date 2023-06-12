'use client'

import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
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
        <h1>Sign Up</h1>
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
                {...register('password', {
                  required: `Can't be empty`,
                  minLength: {
                    value: 8,
                    message: 'Password must be at at least 8 characters long',
                  },
                })}
                type='text'
                placeholder='Password'
              />
              <p className='errorMsg'>{errors.password?.message}</p>
            </div>
            <hr />
          </div>
          <div>
            <div className='errorContainer'>
              <input
                {...register('confirmPassword', {
                  required: `Can't be empty`,
                  minLength: {
                    value: 8,
                    message: 'Password must be at at least 8 characters long',
                  },
                  validate: (val: string) => {
                    if (watch('password') != val) {
                      return 'Your passwords do no match'
                    }
                  },
                })}
                type='text'
                placeholder='Repeat password'
              />
              <p className='errorMsg'>{errors.confirmPassword?.message}</p>
            </div>
            <hr />
          </div>
          <button className={styles.signUpBtn}>Create an account</button>
        </form>
        <p className={styles.subtitle}>
          Already have an account?{' '}
          <Link href='/login' className={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </>
  )
}
