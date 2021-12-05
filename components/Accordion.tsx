import { FunctionComponent, useState } from "react";
import styles from '../styles/accordion.module.css'

type PropsType = {
    question: string
    answer: string
    num:number
}

const Accordion:FunctionComponent<PropsType> = (props) => {
    const {question,answer,num} = props
    const [open,setOpen] = useState(false)
    const openAnswer = () => {
        setOpen(!open)
    }

    return(
        <>
            <div
                className={styles.accordion__wrapper}
                {...open?{"aria-expanded":true}:{"aria-expanded":false}}
                aria-controls={`panel${num}`}
            >
                <p>{question}</p>
                <button
                    {...open===true ? 
                        {className:styles.accordion__openbtn}
                        :
                        {className:styles.accordion__btn}
                    }
                    onClick={openAnswer}
                >
                    +
                </button>
            </div>
            <div 
                {...open===true ? 
                    {className:styles.answer__open}
                    :
                    {className:styles.answer__wrapper}
                }
            >
                <p id={`panel${num}`}>{answer}</p>
            </div>
        </>
    )
}

export default Accordion