import React, {useContext} from 'react';
import style from '../css/bottom-around.module.css'
import {useNavigate} from "react-router-dom";
import {characters, navItems, StarWarsContext} from "../utils/constants";

interface Props{
    friend: string,
    pos: number
}
const Friend = ({friend, pos}: Props) => {
    const {setHero} = useContext(StarWarsContext);
    const navigate = useNavigate();

    const changeHero = () => {
        navigate(`/${navItems[0].route}/${friend}`);
        setHero(friend);
    }

    let styles = 'col-4 p-1 friend_img ';
    if (pos === 7) {
        styles += style["bottom-left"];
    }
    if (pos === 9) {
        styles += style["bottom-right"];
    }
    return (
        <img onClick={changeHero} className={styles} src={characters[friend].img} alt={characters[friend].name}/>
    );
};

export default Friend;