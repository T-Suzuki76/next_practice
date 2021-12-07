import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Skill from "../components/Skill";
import styles from '../styles/skill.module.css';

const skills :NextPage =()=>{
    return(
        <Layout title={"Next-Practice｜skills"} isHeader={true} isFooter={true}>
            <div className={styles.skill}>
                <h2 className={styles.skill__head}>Skills</h2>
                <p className={styles.skill__description}>The figures are based on my own perception.</p>
                <p className={styles.skill__description}>*This page has been created for use with next/Image.</p>
                <div className={styles.skill__wrapper}>
                    <Skill 
                        src={"/html5.png"}
                        value={90} 
                        letter="Mostly fine."
                    />
                    <Skill 
                        src={"/css3.png"} 
                        value={90} 
                        letter="Mostly fine."
                    />
                    <Skill 
                        src={"/sass.png"} 
                        value={90} 
                        letter="Mostly fine."
                    />
                    <Skill 
                        src={"/js.png"} 
                        value={70} 
                        letter="The basics are fine."
                    />
                    <Skill 
                        src={"/react.png"} 
                        value={60} 
                        letter="Available."
                    />
                    <Skill 
                        src={"/next.png"} 
                        value={30} 
                        letter="Learning."
                    />
                </div>
            </div>
        </Layout>
    )
}

export default skills