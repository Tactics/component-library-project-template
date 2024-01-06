import React from 'react';
import {ThemeColors, ThemeFonts} from "../../../.theme/contracts/theme";
import {useThemeColorContext} from "../../../.theme/hooks/use-theme-colors-context";
import {useThemeFontsContext} from "../../../.theme/hooks/use-theme-fonts-context";
import {
    Button as Component,
    ButtonLabel as Label,
    ButtonLabelStyleProps,
    ButtonStyleProps
} from "./button.style";

export const Button = ({children} : {children : React.ReactNode}) => {
    const colors : ThemeColors = useThemeColorContext();
    const fonts : ThemeFonts = useThemeFontsContext();

    const style : ButtonStyleProps = {
        background: colors.main.regular,
        text: colors.secondary.tint_6,
        font: fonts.main["4xl"],
    }

    return (
        <Component style={style}>
            {children}
        </Component>
    );
};

Button.Label = function ButtonLabel({children} : {children : React.ReactNode}) {

    const colors : ThemeColors = useThemeColorContext();
    const fonts : ThemeFonts = useThemeFontsContext();

    const style : ButtonLabelStyleProps = {}

    return (
        <Label style={style}>
            {children}
        </Label>
    );
}
