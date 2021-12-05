import { FunctionComponent, useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/skill.module.css'

type PropsType = {
    src: string
    letter:string
    value:number
}

const Skill : FunctionComponent<PropsType>=(props)=> {
    const {src, letter, value} = props

    return(
        <div className={styles.skill__item}>
            <Image src={src} width={60} height={60}></Image>
            <div className={styles.skill__progress}>
                <div className={styles.skill__back}>
                    <div style={{width:`${value}%`}} className={styles.skill__bar}></div>
                </div>
                <span>{value}%</span>
                <p className={styles.skill__detail}>
                    {letter}
                </p>
            </div>
        </div>
    )
}

export default Skill