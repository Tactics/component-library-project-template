import {useContext} from "react";
import {ThemeI} from "../theme/contracts/theme";
import {ThemeCtx} from "../context/theme-context";
import {BaseTheme} from "../base-theme/base-theme";

export const useTheme = () : ThemeI => {
    try {
        return useContext(ThemeCtx);
    } catch (error) {
        // Return the default value if an error occurs
        return BaseTheme.standard;
    }
};