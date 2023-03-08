import React, {useContext} from 'react';
import {NaviContext} from "../utils/context";
const Footer = () => {
    const {item} = useContext(NaviContext);
    return (
        <footer className="row align-items-center m-0">
            {item.title !== "Contact" && (
                <div className="border-button">
                    <p className="text-center m-0">
                        Send me an <span className="email text-uppercase">email</span>
                    </p>
                </div>
            )}
        </footer>
    );
};

export default Footer;