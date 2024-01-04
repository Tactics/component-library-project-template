import {useContrastContext} from "./use-contrast-context";
import {useThemeContext} from "./use-theme-context";
import {Contrast} from "../contrast";

export const useThemeColorContext = () => {

    const contrast = useContrastContext();
    console.log('color');
    console.log(contrast);
    const theme = useThemeContext();

    switch (contrast) {
        case Contrast.LIGHT:
            return theme.light;
        case Contrast.DARK:
            return theme.dark;
        case Contrast.HIGH_CONTRAST:
            return theme.contrast;
    }
};