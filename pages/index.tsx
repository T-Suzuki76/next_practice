import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Next-Practice" isHeader={true} isFooter={true}>
      <div className={styles.container}>
    
      </div>
    </Layout>
  )
}

export default Home
