import { ReactElement } from "react";
import { Magnify, Reduce } from "./icons";
import styles from './Zoom.module.css'

interface ZoomInterface {
    increase: () => void;
    decrease: () => void;
    size: number;
}

const Zoom = ({increase, decrease, size}: ZoomInterface):ReactElement => {
    return (
        <div className={styles.zoomContainer}>
            <button onClick={increase} disabled={!(size < 5)}>
                <Magnify fill="white"/>
            </button>
            <button onClick={decrease} disabled={!(size > 1)}>
                <Reduce fill="white"/>
            </button>
        </div>
    )
}

export {
    Zoom
}