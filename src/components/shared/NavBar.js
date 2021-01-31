
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <>
        <Navbar className={styles.NavColor}>
            <Navbar.Brand href="/">MLGR</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className={styles.Active} href="/about">About me</Nav.Link>
            <Nav.Link className={styles.Active} href="/projects">Learning projects</Nav.Link>
            <Nav.Link className={styles.Active} href="/contributions">Contributions</Nav.Link>
            <Nav.Link className={styles.Active} href="/more">More</Nav.Link>
            </Nav>
        </Navbar>
        </>
    );
}