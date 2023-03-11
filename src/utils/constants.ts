import friend1 from "../Images/friend1.jpg";
import friend2 from "../Images/friend2.jpg";
import friend3 from "../Images/friend3.jpg";
import friend4 from "../Images/friend4.jpg";
import friend5 from "../Images/friend5.jpg";
import friend6 from "../Images/friend6.jpg";
import friend7 from "../Images/friend7.jpg";
import friend8 from "../Images/friend8.jpg";
import friend9 from "../Images/friend9.jpg";
import friend0 from "../Images/main.jpg";
import {Characters, HeroContext, NavigationItem} from "./types";
import React from "react";

export const base_url = 'https://sw-info-api.herokuapp.com';
export const period_month = 30 * 24 * 60 * 60 * 1000;
export const navItems: NavigationItem[] = [{title:'Home', route: 'home'}, {title: 'About me', route: 'about_me'},
    {title: 'Star Wars', route: 'star_wars'}, {title: 'Contact', route: 'contact'}];

export const starWarsText ="Star Wars (retroactively titled Star Wars: Episode IV – A New Hope) is a 1977 American epic space opera film written and directed by George Lucas, produced by Lucasfilm and distributed by 20th Century Fox. It is the first film in the Star Wars film series and fourth chronological chapter of the \"Skywalker Saga\". Set \"a long time ago\" in a fictional universe where the galaxy is ruled by the tyrannical Galactic Empire, the story focuses on a group of freedom fighters known as the Rebel Alliance, who aim to destroy the Empire's newest weapon, the Death Star. Luke Skywalker becomes caught in the conflict while learning the ways of a metaphysical power known as \"the Force\" from Jedi Master Obi-Wan Kenobi. The cast includes Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness, David Prowse, James Earl Jones, Anthony Daniels, Kenny Baker, and Peter Mayhew. Lucas had the idea for a science-fiction film in the vein of Flash Gordon around the time he completed his first film, THX 1138 (1971) and began working on a treatment after the release of American Graffiti (1973). After numerous rewrites, filming took place throughout 1975 and 1976 in locations including Tunisia and Elstree Studios in Hertfordshire, England. The film suffered production difficulties; cast and crew involved believed the film would be a failure. Lucas formed the visual effects company Industrial Light & Magic to help create the film's special effects. It also went $3 million over budget due to multiple delays. Star Wars was released in a limited number of theaters in the United States on May 25, 1977 and quickly became a blockbuster hit, leading to it being expanded to a much wider release. The film opened to critical acclaim for its acting, direction, story, musical score, action sequences, sound, editing, screenplay, costume design, and production values, but particularly for its groundbreaking visual effects. It grossed over $550 million during its initial run, surpassing Jaws (1975) to become the highest-grossing film until the release of E.T. the Extra-Terrestrial (1982); subsequent releases brought its total gross to $775 million. When adjusted for inflation, Star Wars is the second-highest-grossing film in North America (behind Gone with the Wind) and the fourth-highest-grossing film of all time. It received numerous awards at the Academy Awards, BAFTA Awards, Saturn Awards, among others. The film has been reissued many times with Lucas's support—most significantly with its 20th-anniversary theatrical \"Special Edition\"—incorporating many changes including modified computer-generated effects, altered dialogue, re-edited shots, remixed soundtracks and added scenes. Often regarded as one of the greatest and most influential films ever made, the film became a pop-cultural phenomenon, launching an industry of tie-in products, including novels, comics, video games, amusement park attractions and merchandise including toys, games, and clothing. It became one of the first 25 films selected by the United States Library of Congress for preservation in the National Film Registry in 1989, while its soundtrack was added to the U.S. National Recording Registry in 2004. The Empire Strikes Back (1980) and Return of the Jedi (1983) followed Star Wars, rounding out the original Star Wars trilogy. A prequel and a sequel trilogy have since been released, in addition to two anthology films and various television series.";

export const expiration:number = 30;

export const version = '/v1';

export const characters:Characters = {
    luke: {
        name: "Luke Skywalker",
        img: friend0,
        url: `${base_url+version}/peoples/1`
    },
    c3po:{
        name: "C-3PO",
        img: friend2,
        url: `${base_url+version}/peoples/2`
    },
    r2d2:{
        name: "R2-D2",
        img: friend1,
        url: `${base_url+version}/peoples/3`
    },
    leia:{
        name: "Leia Organa",
        img: friend6,
        url: `${base_url+version}/peoples/5`
    },
    obi_wan:{
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${base_url+version}/peoples/10`
    },
    chewbacca:{
        name: "Chewbacca",
        img: friend4,
        url: `${base_url+version}/peoples/13`
    },
    han_solo:{
        name: "Han Solo",
        img: friend5,
        url: `${base_url+version}/peoples/14`
    },
    yoda:{
        name: "Yoda",
        img: friend9,
        url: `${base_url+version}/peoples/0`
    },
    ewok:{
        name: "Wicket Systri Warrick",
        img: friend3,
        url: `${base_url+version}/peoples/30`
    },
    falcon:{
        name: "Millennium Falcon",
        img: friend7,
        url: `${base_url+version}/transports/10`
    }
};

export const defaultHero = Object.keys(characters)[0];

export const StarWarsContext = React.createContext<HeroContext>({hero: defaultHero, setHero: (hero: string) => {}});

export const friends = Object.keys(characters);