import {createContext} from "react";
import {BaseTheme} from "../base-theme";
import {ThemeColors} from "../contracts/theme";

export const ThemeColorCtx = createContext<ThemeColors>(BaseTheme.colors.light);
