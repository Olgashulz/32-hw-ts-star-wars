import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import styles from "../css/clearfix.module.css"
import pathWithHero from "../hoc/pathWithHero";

const Home = () => {
            return (
                <main className={styles.clearfix}>
                    <Hero/>
                    <DreamTeam/>
                    <FarGalaxy/>
                </main>
            );
}

export default pathWithHero(Home);