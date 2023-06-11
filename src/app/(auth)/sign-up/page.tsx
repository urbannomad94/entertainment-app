import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

export default function SignUp() {
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
        <form action=''>
          <div>
            <input type='email' placeholder='Email address' />
            <hr />
          </div>
          <div>
            <input type='text' placeholder='Password' />
            <hr />
          </div>
          <div>
            <input type='text' placeholder='Repeat password' />
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
