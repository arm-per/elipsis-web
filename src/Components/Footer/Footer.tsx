import { ReactElement, useContext} from "react";
import styles from './Footer.module.css';
import { AccessibilityContext } from "../../Contexts/Accessibility";

export const Footer = (): ReactElement => {
    const {readingMode} = useContext(AccessibilityContext)
    return <footer className={`${styles.mainFooter} ${readingMode ? 'on-reading': ''}`}>
        <div>
            <p>Revista Elipsis {new Date().getFullYear()}</p>
        </div>
    </footer>
}