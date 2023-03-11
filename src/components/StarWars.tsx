import React from 'react';
import {starWarsText} from "../utils/constants";
import pathWithHero from "../hoc/pathWithHero";

const StarWars = () => {
    return (
        <div className="starWars">
            <div className="contentBox">
                <div className="starWars__text">
                    {starWarsText}
                </div>
            </div>
        </div>
    );
};
export default pathWithHero(StarWars);