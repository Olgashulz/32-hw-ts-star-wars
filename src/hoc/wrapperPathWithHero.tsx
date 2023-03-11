import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {defaultHero, friends, navItems, StarWarsContext} from "../utils/constants";


interface Props{
    [key: string]: string
}
const wrapperPathWithHero= (WrappedComponent:React.FC) => {
    return (props: Props) => {
        const { heroId = '' } = useParams();
        const { setHero: changeHero } = useContext(StarWarsContext);
        const navigate = useNavigate();

        useEffect(() => {
            if (!friends.includes(heroId)) {
                navigate(`/${navItems[0].route}/${defaultHero}`);
            } else {
                changeHero(heroId);
            }
        }, [heroId]);
        return <WrappedComponent {...props} />;
    };
};

export default wrapperPathWithHero;