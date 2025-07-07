import { ReactElement, useContext} from "react";

import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_CHANNEL_URL } from "../../constants/constants";
import { AccessibilityContext } from "../../Contexts/Accessibility";

import facebookIcon from '../../assets/icons/facebook-circle-fill.svg';
import instagramIcon from '../../assets/icons/instagram-fill.svg';
import youtubeIcon from '../../assets/icons/youtube-fill.svg';


import styles from './Footer.module.css';

export const Footer = (): ReactElement => {
    const {readingMode} = useContext(AccessibilityContext)
    return <footer className={`${styles.mainFooter} ${readingMode ? 'on-reading': ''}`}>
        <div className={styles.wrapper}>
            <div className={styles.contact}><p>Contacto: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p></div>
            <div className={styles.footerText}>
                <p>Revista Elipsis {new Date().getFullYear()}</p>
            </div>
            <div className={styles.socialIcons}>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" /></a>
            </div>
        </div>
    </footer>
}