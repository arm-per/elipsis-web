import {useContext, useState, useEffect} from "react";

import { AccessibilityContext } from "../../Contexts/Accessibility";
import { ToggleTheme, Zoom, Reading, Quick } from "../Buttons";

import styles from './PreferencesIsland.module.css'

const PreferencesIsland = () => {

    const {increaseFontSize, decreaseFontSize, fontSize, theme, themeToggle, readingMode, readingModeToggle} = useContext(AccessibilityContext);
    const [show, setShow] = useState<boolean>(false);
    const [deviceWidth, setDeviceWidth] = useState<number>(960);

    useEffect(()=>{
        setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setDeviceWidth(window.innerWidth);
        })
    }, [])

    useEffect(()=>{
        const body = document.querySelector('body');
        if(theme === 'light'){
            body!.classList.remove('dark');
            body!.classList.add('light')
        }else{
            body!.classList.remove('light');
            body!.classList.add('dark');
        }
    }, [theme])

    useEffect(()=>{
        const header = document.querySelector('#main-header');
        if(readingMode && header){
            header.classList.add('on-reading');
        }else if(!readingMode && header){
            header.classList.remove('on-reading')
        }
    }, [readingMode])
    
    const showHandler = () => {
        setShow(prev => !prev)
    }

    return (
        <>
            { 
                deviceWidth > 480 && 
                <aside className={`${styles.preferenceContainer}`}>
                    <Zoom
                        increase={increaseFontSize}
                        decrease={decreaseFontSize}
                        size={fontSize}
                    />
                    <ToggleTheme 
                        theme={theme} 
                        onClick={themeToggle}/>
                    <Reading 
                        active={readingMode} 
                        action={readingModeToggle}/>
                </aside>
            }
            {
                deviceWidth <= 480 && 
                <aside className={`${styles.preferenceContainer} ${show && styles.quickaccess}`}>
                    {
                        show && 
                        <>
                            <Zoom
                                increase={increaseFontSize}
                                decrease={decreaseFontSize}
                                size={fontSize}
                            />
                            <ToggleTheme 
                                theme={theme} 
                                onClick={themeToggle}
                            />
                            <Reading 
                                active={readingMode} 
                                action={readingModeToggle}
                            />
                        </>
                    }
                    <Quick action={showHandler} state={show} id="access"/>
                </aside>
            }
        </>
        
    )
}

export {
    PreferencesIsland
}