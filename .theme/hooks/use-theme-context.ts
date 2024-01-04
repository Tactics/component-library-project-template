import {useContext} from "react";
import {BaseTheme} from "../base-theme";
import {ThemeCtx} from "../context/theme-context";

export const useThemeContext = () => {
    try {
        return useContext(ThemeCtx);
    } catch (error) {
        console.log(error);
        // Return the default value if an error occurs
        return BaseTheme;
    }
};