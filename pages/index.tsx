import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'
import Image from 'next/image'
import mv from "../images/mv.jpg"
import { useRouter } from 'next/dist/client/router'

const Home: NextPage = () => {
  const router = useRouter()

  const changePage = (path:string) => {
    router.push(`/${path}`)
  }

  return (
    <Layout title="Next-Practice" isHeader={true} isFooter={true}>
      <div className={styles.container}>
        <Image src={mv} layout="responsive"/>
        <div className={styles.route}>
          <h2>Dynamic Routes with "useRouter"</h2>
          <div className={styles.route__btns}>
            <button 
              onClick={()=>changePage("practice")}
              className={styles.route__btn}
            >
              Practice
            </button>
            <button
              onClick={()=>changePage("skills")}
              className={styles.route__btn}
            >
              skills
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
