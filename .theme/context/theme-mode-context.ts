import {createContext} from "react";
import {ThemeMode} from "../enum/theme-mode";
export const ThemeModeCtx = createContext<ThemeMode>(ThemeMode.STANDARD);
