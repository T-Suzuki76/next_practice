import { FunctionComponent } from "react";
import styles from '../../styles/tab.module.css'

type PropsType = {
    index: number
}

const Panel:FunctionComponent<PropsType> = (props) => {
    const {index} = props

    return(
        <>
            {index===1&&
                <div className={styles.tab__panel}>
                    <p>Panel{index}</p>
                    <p>This is Panel{index}</p>
                </div>
            }
            {index===2&&
                <div className={styles.tab__panel}>
                    <p>Panel{index}</p>
                    <p>This is Panel{index}</p>
                </div>
            }
            {index===3&&
                <div className={styles.tab__panel}>
                    <p>Panel{index}</p>
                    <p>This is Panel{index}</p>
                </div>
            }
        </>
    )
}

export default Panel