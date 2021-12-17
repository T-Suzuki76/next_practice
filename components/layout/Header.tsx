import { FunctionComponent } from "react";
import Link from 'next/link'
import styles from '../../styles/layout/Header.module.css'

const Header : FunctionComponent =()=> {
    return(    
        <header className={styles.header}>
            <h1 className={styles.header__title}><Link href="/"><a>Next-Practice</a></Link></h1>
            <div>
                <Link href="/practice"><a className={styles.header__link}>practice</a></Link>
                <Link href="/works"><a className={styles.header__link}>works</a></Link>
                <Link href="/skills"><a className={styles.header__link}>skills</a></Link>
            </div>
        </header>
    )
}

export default Header