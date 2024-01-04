import {useContext} from "react";
import {ContrastCtx} from "../context/theme-contrast-context";
import {Contrast} from "../contrast";

export const useContrastContext = () => {
    try {
        return useContext(ContrastCtx);
    } catch (error) {
        console.log(error);
        // Return the default value if an error occurs
        return Contrast.LIGHT;
    }
};