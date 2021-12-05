import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Skill from "../components/Skill";
import html5 from '../images/html5-original.svg'
import css3 from '../images/css3-original.svg'
import sass from '../images/sass-original.svg'
import js from '../images/javascript-original.svg'
import react from '../images/react-original.svg'
import next from '../images/nextjs-original.svg'
import styles from '../styles/skill.module.css'

const skills :NextPage =()=>{
    return(
        <Layout title={"Next-Practice｜skills"} isHeader={true} isFooter={true}>
            <h2 className={styles.skill__head}>Skills</h2>
            <p className={styles.skill__description}>The figures are based on my own perception.</p>
            <p className={styles.skill__description}>*This page has been created for use with next/Image.</p>
            <div className={styles.skill}>
                <Skill 
                    src={html5} 
                    value={90} 
                    letter="Mostly fine."
                />
                <Skill 
                    src={css3} 
                    value={90} 
                    letter="Mostly fine."
                />
                <Skill 
                    src={sass} 
                    value={90} 
                    letter="Mostly fine."
                />
                <Skill 
                    src={js} 
                    value={70} 
                    letter="The basics are fine."
                />
                <Skill 
                    src={react} 
                    value={60} 
                    letter="Available."
                />
                <Skill 
                    src={next} 
                    value={30} 
                    letter="Learning."
                />
            </div>
        </Layout>
    )
}

export default skills