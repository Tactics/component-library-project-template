import {useTheme} from "./use-theme";
import {AlternateI} from "../alternate/contracts/alternate";

export const useThemeAlternate = () : AlternateI => {
    const theme = useTheme();
    return theme.alternate;
};