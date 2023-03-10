import React, {useContext} from 'react';
import {friends, StarWarsContext} from "../utils/constants";
import Friend from "./Friend";
import styles from '../css/dremTeam.module.css'
import styleBorder from '../css/border.module.css'

const DreamTeam = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <section className={`float-end w-50 row ${styleBorder.border} mx-1 mt-1}`}>
            <h2 className={`col-12 text-center ${styles["title-dreamTeam"]}`}>Dream Team</h2>
            {friends.filter(f=> f !== hero).map((f, i) => <Friend key={f} pos={i+1} friend={f}/>)}
        </section>
    );
};

export default DreamTeam;