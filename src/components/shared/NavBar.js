
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.css';
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <Navbar className={styles.NavColor}>
            <Navbar.Brand as={Link} to="/">MLGR</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link as={NavLink} className={styles.Active} to="/about">About me</Nav.Link>
            <Nav.Link as={NavLink} className={styles.Active} to="/projects">Learning projects</Nav.Link>
            <Nav.Link as={NavLink} className={styles.Active} to="/contributions">Contributions</Nav.Link>
            <Nav.Link as={NavLink} className={styles.Active} to="/more">More</Nav.Link>
            </Nav>
        </Navbar>
        </>
    );
}