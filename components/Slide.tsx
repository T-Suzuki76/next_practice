import { FunctionComponent, useEffect, useState } from "react";
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import styles from '../styles/slide.module.css'
import Image from 'next/image'

const Slide :FunctionComponent = () => {
    const photoAry = [photo1, photo2, photo3, photo4]
    const [current, setCurrent] = useState(0)
    const [fade, setFade] = useState(true)
    const [unmount, setUnmount] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            if(current < photoAry.length-1){
                setCurrent(i=>i+1)
                setFade(false)
            }else if(current === photoAry.length-1){
                setCurrent(0)
                setFade(false)
            }
        },2500)
        return(()=>{
            setUnmount(!unmount)
        })
    },[current])

    useEffect(()=>{
        if(fade===false){
            setTimeout(()=>{
                setFade(true)
            },100)
        }
    },[fade])

    return(
        <div className={styles.slide}>
            <Image 
                src={photoAry[current]} 
                width={600} 
                height={400}
                className={styles.img}
                {...fade===true&&
                    {className:styles.fade__img}
                }
            />
        </div>
    )
}

export default Slide