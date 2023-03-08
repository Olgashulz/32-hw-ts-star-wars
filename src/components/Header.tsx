import React, {useContext} from 'react';
import Navigation from "./Navigation";
import styles from '../css/header.module.css'
import {characters, StarWarsContext} from "../utils/constants";

const Header = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <header>
            <Navigation/>
            <h1 className={`text-center py-4 ${styles.title}`}>{characters[hero].name}</h1>
        </header>
    );
};

export default Header;