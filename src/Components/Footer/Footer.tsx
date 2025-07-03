import { ReactElement, useContext} from "react";

import { AccessibilityContext } from "../../Contexts/Accessibility";

import styles from './Footer.module.css';

export const Footer = (): ReactElement => {
    const {readingMode} = useContext(AccessibilityContext)
    return <footer className={`${styles.mainFooter} ${readingMode ? 'on-reading': ''}`}>
        <div>
            <p>Revista Elipsis {new Date().getFullYear()}</p>
        </div>
    </footer>
}