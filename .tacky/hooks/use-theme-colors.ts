import {useTheme} from "./use-theme";
import {ColorsI} from "../colors/contracts/colors";

export const useThemeColor = () : ColorsI => {
    const theme = useTheme();
    return theme.colors;
};