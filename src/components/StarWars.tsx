import React from 'react';
import {starWarsText} from "../utils/constants";
import wrapperPathWithHero from "../hoc/wrapperPathWithHero";

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
export default wrapperPathWithHero(StarWars);