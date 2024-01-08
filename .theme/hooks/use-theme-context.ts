import {useContext} from "react";
import {ThemeCtx} from "../context/theme-context";
import {BaseTheme} from "../base-theme/base-theme";
import {ThemeI} from "../theme/contracts/theme";

export const useThemeContext = () : ThemeI => {
    try {
        return useContext(ThemeCtx);
    } catch (error) {
        console.log(error);
        // Return the default value if an error occurs
        return BaseTheme;
    }
};