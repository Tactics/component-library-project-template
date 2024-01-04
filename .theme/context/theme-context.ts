import {Theme} from "../theme";
import {createContext} from "react";
import {BaseTheme} from "../base-theme";

export const ThemeCtx = createContext<Theme>(BaseTheme);
