import {ThemeColors} from "../theme";
import {createContext} from "react";
import {BaseTheme} from "../base-theme";

export const ThemeColorCtx = createContext<ThemeColors>(BaseTheme.light);
