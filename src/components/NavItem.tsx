import React from 'react';
import {NavigationItem} from "../utils/types";
import {Link} from "react-router-dom";

interface Props {
    item: NavigationItem
}

const NavItem = ({item}: Props) => {

    return (
            <li>
                <Link  to={item.route}>{item.title}</Link>
            </li>
    );
};

export default NavItem;