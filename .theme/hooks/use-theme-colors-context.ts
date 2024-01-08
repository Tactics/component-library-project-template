import {useContrastContext} from "./use-contrast-context";
import {useThemeContext} from "./use-theme-context";
import {Contrast} from "../enum/contrast";
import {ColorsI} from "../colors/contracts/colors";

export const useThemeColorContext = () : ColorsI => {

    const contrast = useContrastContext();
    const theme = useThemeContext();

    const mapping: Record<Contrast, ColorsI> = {
        [Contrast.LIGHT]: theme.colors.light,
        [Contrast.DARK]: theme.colors.dark,
        [Contrast.HIGH_CONTRAST]: theme.colors.contrast,
    };

    return mapping[contrast] || theme.colors.light;
};