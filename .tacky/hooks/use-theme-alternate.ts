import {useTheme} from "./use-theme";
import {AlternateI, AlternateItem} from "../alternate/contracts/alternate";

export const useThemeAlternate = () : AlternateItem[] => {
    const theme = useTheme();
    return theme.alternate;
};