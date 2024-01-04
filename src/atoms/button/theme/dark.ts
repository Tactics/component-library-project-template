import { ButtonTheme } from "@/atoms/button/theme/theme";
import {GlobalTheme} from "../../../../themes/theme";

export const ButtonDark = (theme: GlobalTheme): ButtonTheme => {
    if (theme.button) {
        return theme.button;
    }

    return {
        text: theme.colors.main,
        background: '',
    };
};