import {createContext} from "react";
import {BaseTheme} from "../base-theme";
import {Theme} from "../contracts/theme";

export const ThemeCtx = createContext<Theme>(BaseTheme);
