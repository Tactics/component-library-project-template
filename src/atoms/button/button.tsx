import React from 'react';
import {useThemeColorContext} from "../../../.theme/hooks/use-theme-colors-context";
import {useThemeFontsContext} from "../../../.theme/hooks/use-theme-fonts-context";
import {
    Button as Component,
    ButtonLabel as Label,
    ButtonLabelStyleProps,
    ButtonStyleProps
} from "./button.style";
import {ColorsI} from "../../../.theme/colors/contracts/colors";
import {TypographyFontsI} from "../../../.theme/typography/contracts/fonts";

export const Button = ({children} : {children : React.ReactNode}) => {
    const colors : ColorsI = useThemeColorContext();
    const fonts : TypographyFontsI = useThemeFontsContext();

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

    const colors : ColorsI = useThemeColorContext();
    const fonts : TypographyFontsI = useThemeFontsContext();

    const style : ButtonLabelStyleProps = {}

    return (
        <Label style={style}>
            {children}
        </Label>
    );
}
