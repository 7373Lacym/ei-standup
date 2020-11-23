import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

const GREETING = 'Standup'
const SALUTATION = 'Have a good day'

let devs = ['Austin', 'Mitch', 'Jacob', 'Jake', 'John', 'Kate'].sort(() => .5 - Math.random())
devs.unshift('Rebecca')

export default function Home() {
  const [user, setUser] = React.useState(GREETING);
  return (
    <div className={styles.container}>
      <Head>
        <title>Standup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {user || SALUTATION}
        </h1>
          <button onClick={() => setUser(devs.pop())}>Next</button>
      </main>
    </div>
  )
}
