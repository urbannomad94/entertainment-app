import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

export default function Login() {
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
        <h1>Login</h1>
        <form action=''>
          <div>
            <input type='email' placeholder='Email address' />
            <hr />
          </div>
          <div>
            <input type='text' placeholder='Password' />
            <hr />
          </div>
          <button className={styles.loginBtn}>Login to your account</button>
        </form>
        <p className={styles.subtitle}>
          Don&apost have an account?{' '}
          <Link href='/sign-up' className={styles.signUpLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  )
}
