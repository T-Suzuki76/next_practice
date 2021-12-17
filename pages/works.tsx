import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import styles from '../styles/skill.module.css';

const works :NextPage =()=>{
    return(
        <Layout title={"Next-Practice｜skills"} isHeader={true} isFooter={true}>
            <div className={styles.skill}>
                <h2 className={styles.skill__head}>Works</h2>
                <p>Getting Ready...</p>
            </div>
        </Layout>
    )
}

export default works