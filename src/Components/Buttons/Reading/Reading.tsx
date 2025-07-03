import { ReactElement } from "react";
import { Book } from "./icon";
import styles from './Reading.module.css'

const Reading = ({active, action}: {active: boolean, action: () => void}):ReactElement => {
    return (
        <div className={styles.readingModeContainer}>
            <button onClick={action} className={`${active && styles.readingModeReverse}`}>
                <Book fill="white"/>
            </button>
        </div>
    )
}

export {
    Reading
}