
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.css';
import { Link, NavLink } from "react-router-dom";


import Twitter from '../../assets/img/twitter.svg';
import Telegram from '../../assets/img/telegram.svg';
import Github from "../../assets/img/github.svg";
import Mail from '../../assets/img/mail.svg';
import Linkedin from '../../assets/img/linkedin.svg';

type Props = {
    abbreviation: string,
}

const NavBar = (props: Props) => {
    return (
        <>
        <Navbar className={styles.NavColor}>
            <Navbar.Brand as={Link} to="/">{props.abbreviation}</Navbar.Brand>
            <Nav className={styles.navPersonalization}>
                <Nav.Link as={NavLink} className={styles.Active} to="/about"replace>About me</Nav.Link>
                <Nav.Link as={NavLink} className={styles.Active} to="/projects"replace>Learning projects</Nav.Link>
                <Nav.Link as={NavLink} className={styles.Active} to="/contributions"replace>Contributions</Nav.Link>
                <Nav.Link as={NavLink} className={styles.Active} to="/more"replace>More</Nav.Link>
                
            </Nav>
            <div className={styles.logos}>
                <a href="https://github.com/mayralgr" target="blank" className="menu-item">
                    <img className={styles.logo} src={Github} alt="github logo"/>
                </a>
                <a href="https://twitter.com/luceroGRmz" target="blank" className="menu-item">
                    <img className={styles.logo} src={Twitter} alt="twitter logo"/>
                </a>
                <a href="https://t.me/cerolu" target="blank" className="menu-item">
                    <img className={styles.logo} src={Telegram} alt="telegram logo"/>
                </a>
                <a href="mailto:rdz.lucero_ramirez_dev@gmail.com" target="blank" className="menu-item">
                    <img className={styles.logo} src={Mail} alt="mail logo"/>
                </a>
                <a href="https://www.linkedin.com/in/mayra-lucero-garc%C3%ADa-ram%C3%ADrez-885352121/" target="blank" className="menu-item">
                    <img className={styles.logo} src={Linkedin} alt="linkedin logo"/>
                </a>
            </div>
        </Navbar>
        </>
    );
}

export default NavBar;