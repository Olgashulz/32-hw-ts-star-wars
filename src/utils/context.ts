import {navItems} from "./constants";
import React from "react";
import {NavigationItem} from "./types";

export const NaviContext = React.createContext(
    {
        item:navItems[0],
    });