import { FunctionComponent, useState } from "react";
import styles from '../styles/modal.module.css'

const Modal :FunctionComponent = () => {
    const [open, setOpen] = useState(false)
    const openModal=()=>{
        setOpen(true)
    }
    const closeModal=()=>{
        setOpen(false)
    }
    return(
        <>
            <button onClick={openModal} className={styles.modal__btn}>OPEN</button>
            {open&&
                <>
                    <div className={styles.modal__wrapper}>
                        <div className={styles.modal__head}>
                            <span className={styles.modal__title}>successfull</span>
                            <span 
                                className={styles.modal__close}
                                onClick={closeModal}
                            >
                                ×
                            </span>
                        </div>
                        <p className={styles.modal__body}>Opened successfully.</p>
                    </div>
                    <div className={styles.modal__bg}></div>
                </>
            }
        </>
    )
}

export default Modal