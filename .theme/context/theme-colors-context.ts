import {createContext} from "react";
import {ColorsI} from "../colors/contracts/colors";
import {BaseTheme} from "../base-theme/base-theme";

export const ThemeColorCtx = createContext<ColorsI>(BaseTheme.colors.light);
