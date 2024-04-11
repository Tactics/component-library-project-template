import { createContext } from "react";
import {ThemeI} from "../theme/contracts/theme";
import { BaseTheme } from "../base-theme/base-theme";

export const ThemeCtx = createContext<ThemeI>(BaseTheme);
