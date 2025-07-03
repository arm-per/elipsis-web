/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect, useRef, useState } from "react";

import { useGetBanners } from "../../Hooks/useGetBanners";

import styles from './banner.module.css'

const Banner = ():ReactElement => {

    const {banners, isError, isLoading} = useGetBanners();
    const transitions = banners.length;
    const Wrapper = useRef(null);
    const [counter, setCounter] = useState<number>(0);
    const counterHandler = (newValue: number) => {
        if(newValue >= transitions){
            setCounter(0);
        }
        else{
            setCounter(newValue)
        }
    }

    useEffect(()=> {
        setTimeout(()=>{
            counterHandler(counter + 1)
        }, 4000)
    },[counter])
    
    return <article className={styles.bannerContainer}>
        <div ref={Wrapper} className={styles.bannerWrapper} style={{transform: `translateX(-${counter}00%)`, transition: '.375s'}}>
        {
            !isLoading && !isError && 
            banners.map((banner, index)=> (
                <div key={index} className={styles.bannerBackground}
                    style={{backgroundImage: `url(${banner._embedded["wp:featuredmedia"][0].source_url})`}}>
                    <div className={styles.bannerBodyContainer}>
                        <div className={styles.bannerBody}>
                            <h3>{banner.title.rendered}</h3>
                            <div dangerouslySetInnerHTML={{__html: banner.content.rendered}}/>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>  
    </article>
}

export {
    Banner
}