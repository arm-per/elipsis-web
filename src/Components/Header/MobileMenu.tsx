import { ReactElement, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { setLocations } from "../../Utils/createLink";
import { AccessibilityContext } from "../../Contexts/Accessibility";
import styles from './Header.module.css';

export const MobileMenu = (): ReactElement => {
    const {fontSize} = useContext(AccessibilityContext)
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);
    const [disappear, setDisappear] = useState<boolean>(false)
    const locations = setLocations('/articles');
    // Removed unused locations
    const MenuHandler = () => {
        setDisappear(false);
        if(displayMenu){
            setDisappear(true);
            setTimeout(()=>{
                setDisplayMenu(display => !display);
            }, 300)
            return;
        }
        setDisplayMenu(display => !display)
    }


    // Import categoryName mapping
    // @ts-ignore
    // eslint-disable-next-line
    // prettier-ignore
    // If not imported, you may need to import categoryName from '../../Utils/Categories'
    // import { categoryName } from '../../Utils/Categories';
    // For this patch, assume it's available
    return (
        <>
            <button id="mobile-menu-button" className={styles.mobileMenu__button} onClick={MenuHandler}>{displayMenu ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>}</button>
            {
                displayMenu && 
                <nav id="mobile-menu-area" className={`${styles.mobileMenu__container} ${disappear && styles.mobileMenu__container_fade}`}>
                    {
                                locations.map((link, index) => (
                                    //if link is an empty object, do not render
                                    <>{Object.keys(link).length > 0 && (
                                    <Link 
                                        key={`link-${link.name}`}
                                        className={`${styles.mobileMenu__link} linkSize-${fontSize}`} 
                                        to={link.to}
                                        onClick={MenuHandler}
                                        >
                                            {link.name}
                                    </Link>
                                )}</>))}
                </nav>
            }
        </>
    )
}