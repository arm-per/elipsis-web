import { ReactElement } from "react";
import { SunIcon, MoonIcon } from "./Icons";
import styles from './ToggleTheme.module.css'

interface ToggleThemeInterface {
    theme: 'light' | 'dark';
    onClick: () => void;
}

const ToggleTheme = ({theme, onClick}: ToggleThemeInterface): ReactElement => {

    return (
        <button onClick={onClick} className={`${styles.toggleButton} ${theme === 'light'? styles.bgDark : styles.bgLight}`}>
            <span className={`${styles.iconContainer} ${styles[theme]}` }>
                <SunIcon fill="white"/>
                <MoonIcon fill="white"/>
            </span>
        </button>
    )
}

export {
    ToggleTheme
}