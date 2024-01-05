import {useContext} from "react";
import {ContrastCtx} from "../context/theme-contrast-context";
import {Contrast} from "../enum/contrast";

export const useContrastContext = () : Contrast => {
    try {
        return useContext(ContrastCtx);
    } catch (error) {
        console.log(error);
        // Return the default value if an error occurs
        return Contrast.LIGHT;
    }
};