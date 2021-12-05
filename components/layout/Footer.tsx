import { FunctionComponent } from "react";
import styles from '../../styles/layout/Footer.module.css'

const Footer : FunctionComponent =()=> {
    return(
        <footer className={styles.footer}>
            <small><p>&copy; 2021 damydamy</p></small>
        </footer>
    )
}

export default Footer