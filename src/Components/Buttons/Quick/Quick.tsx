import { ReactElement } from "react";

import { Glasses, Quit } from "./icons";
import styles from './Quick.module.css'

interface QuickInterface {
    action: () => void;
    state: boolean;
    id: string
}

const Quick = ({action, state, id}: QuickInterface): ReactElement => {
    return (
        <button onClick={action} className={`${styles.QuickButton} ${id}`} >
            {
                state ? <Quit fill="white"/> : <Glasses fill="white"/>
            }
            
        </button>
    )
}

export {
    Quick
}