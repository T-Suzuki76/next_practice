import { FunctionComponent, useState } from "react";
import Panel from "./Panel";
import styles from '../../styles/tab.module.css'

const Tabs:FunctionComponent=()=>{
    const [index,setIndex] = useState(1)
    // const [current,setCurrent] = useState(1)
    const changePanel = (num:number) => {
        setIndex(num)
        // setCurrent(1)
    }
    return(
        <div className={styles.tab}>
            <div className={styles.tab__menuWrapper}>
                <span
                    className={styles.tab__menu}
                    {...index===1 && {className:styles.tab__current}}
                    onClick={()=>changePanel(1)}
                    >
                    Tab1
                </span>
                <span
                    className={styles.tab__menu}
                    {...index===2 && {className:styles.tab__current}}
                    onClick={()=>changePanel(2)}
                    >
                    Tab2
                </span>
                <span
                    className={styles.tab__menu}
                    {...index===3 && {className:styles.tab__current}}
                    onClick={()=>changePanel(3)}
                >
                    Tab3
                </span>
            </div>
            <Panel index={index} />
        </div>
    )
}

export default Tabs