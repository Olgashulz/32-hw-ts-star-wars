import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";
import styles from '../css/navigation.module.css'

const Navigation = () => {
    return (
        <nav className={`${styles.fixedTop} mt-1 ms-5`}>
            <ul className={styles.menu}>
                {navItems.map(i => <NavItem key={i.route} item={i}
                />)}
            </ul>
        </nav>
    );
};

export default Navigation;