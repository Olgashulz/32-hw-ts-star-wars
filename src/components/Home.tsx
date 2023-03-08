import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import styles from "../css/clearfix.module.css"
import {navItems, StarWarsContext} from "../utils/constants";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const {hero:contextHero} = useContext(StarWarsContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(contextHero !== "luke"){
            navigate(`/${navItems[0].route}/${contextHero}`);
        }
    },[])

            return (
                <main className={styles.clearfix}>
                    <Hero/>
                    <DreamTeam/>
                    <FarGalaxy/>
                </main>
            );
}

export default Home;