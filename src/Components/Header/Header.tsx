import { ReactElement, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

//import { Categories } from "../../Utils/Categories";
import { AccessibilityContext } from "../../Contexts/Accessibility";
import { setLocations } from "../../Utils/createLink";
import logo from '../../assets/logo.png';
import logotexto from '../../assets/texto.svg';

import { MobileMenu } from "./MobileMenu";
import styles from './Header.module.css'

const Header = ({announce}: {announce: boolean}): ReactElement => {
    const { fontSize } = useContext(AccessibilityContext)
    const [deviceWidth, setDeviceWidth] = useState<number>(960)
    const locations = setLocations('/articles');

    useEffect(()=>{
        setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setDeviceWidth(window.innerWidth);
        })
    }, [])
    return (
        <header id="main-header">
            <div>
                <div className={styles.mainHeaderLogoArea}>
                    <figure className="main-header-logo-wrapper">
                        <Link to="/" className="main-header-logo"><img src={logo} alt="Logotipo de elipsis revista" width="80"/></Link>
                    </figure>
                    <figure>
                        <Link to="/" className="main-header-logo-texto"><img src={logotexto} alt="Revista Elipsis Digital"/></Link>
                    </figure>
                    {
                        announce && 
                        <Link to="convocatoria" className={styles.announce}>
                            Convocatoria
                        </Link>
                    }
                </div>
                { deviceWidth > 480 &&
                    <div className={styles.mainMenu}>
                        <nav className={styles.mainMenu__container}>
                            {
                                locations.map((link, index) => (
                                    <Link 
                                        key={`link-${link.name}-${index}`}
                                        className={`${styles.mainMenu__link} linkSize-${fontSize}`} 
                                        to={link.to}
                                        >
                                            {link.name}
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>
                }
                {deviceWidth < 481 && <MobileMenu/>}
            </div>
        </header>
    )
}

export {Header}