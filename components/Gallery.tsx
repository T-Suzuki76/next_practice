import { FunctionComponent, useEffect, useState } from "react";
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import styles from '../styles/slide.module.css'
import Image from 'next/image'

const Gallery :FunctionComponent = () => {
    const photoAry = [photo1, photo2, photo3, photo4]
    const [current, setCurrent] = useState(0)
    const [fade, setFade] = useState(true)

    const changeImage =(key:number)=>{
        setFade(false)
        setCurrent(key)
    }

    useEffect(()=>{
        if(fade===false){
            setTimeout(()=>{
                setFade(true)
            },200)
        }
    },[fade])

    return(
        <div className={styles.gallery}>
            <Image 
                src={photoAry[current]} 
                width={600} 
                height={400}
                className={styles.img}
                {...fade===true&&
                    {className:styles.fade__img}
                }
            />
            <div className={styles.slide__thumbnail}>
                {photoAry.map((item,key)=>{
                    return(
                        <button className={styles.slide__btn} key={key} onClick={()=>changeImage(key)}>
                            <Image 
                                src={item}
                                width={100} 
                                height={100}
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery