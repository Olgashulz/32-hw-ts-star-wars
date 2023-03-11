import React, {useEffect, useState} from 'react';
import {base_url, characters, period_month} from "../utils/constants";
import {Hero} from "../utils/types";
import {useParams} from "react-router-dom";
import wrapperPathWithHero from "../hoc/wrapperPathWithHero";


const AboutMe = () => {
    const [hero, setHero] = useState<Hero>();
    let {heroId = ''} = useParams();

    useEffect(() => {
            const hero = JSON.parse(localStorage.getItem(heroId)!);
            if (hero && ((Date.now() - hero.time) < period_month)) {
                setHero(hero.payload);
            } else {
                fetch(characters[heroId].url)
                    .then(response => response.json())
                    .then(data => {
                        const hero = {
                            "name": data.name,
                            "height": data.height,
                            "mass": data.mass,
                            "hair_color": data.hair_color,
                            "skin_color": data.skin_color,
                            "eye_color": data.eye_color,
                            "birth_year": data.birth_year,
                            "gender": data.gender,
                            "imgUrl": `${base_url}/${data.image}`
                        };
                        setHero(hero)
                        const info = {
                            payload: hero,
                            time: Date.now()
                        }
                        localStorage.setItem(heroId, JSON.stringify(info));
                    });
            }

    }, [heroId])

    return (
        <>
            {(hero) &&
                <div className='meinContainer aboutMe'>
                    <div className="cardContainer">
                        <div className="cardPhoto">
                            <img src={hero.imgUrl} alt='sw hero' className="cardImg"/>
                        </div>
                        <div className="cardInfo">
                            <p className="cardText">Birth year:
                                <span>{hero.birth_year}</span>
                            </p>
                            <p className="cardText">Height:
                                <span>{hero.height}</span>
                            </p>
                            <p className="cardText">Mass:
                                <span>{hero.mass}</span>
                            </p>
                            <p className="cardText">Eye color:
                                <span>{hero.eye_color}</span>
                            </p>
                            <p className="cardText">Skin color:
                                <span>{hero.skin_color}</span>
                            </p>
                            <p className="cardText">Hair color:
                                <span>{hero.hair_color}</span>
                            </p>
                            <p className="cardText">Gender:
                                <span>{hero.gender}</span>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default wrapperPathWithHero(AboutMe);