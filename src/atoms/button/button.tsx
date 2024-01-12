import React from 'react';
import {useThemeFonts} from "../../../.theme/hooks/use-theme-fonts";
import {
    Button as Component,
    ButtonLabel as Label,
    ButtonLabelStyleProps,
    ButtonStyleProps
} from "./button.style";
import {ColorsI} from "../../../.theme/colors/contracts/colors";
import {TypographyFontsI} from "../../../.theme/typography/contracts/fonts";
import {useThemeAlternate} from "../../../.theme/hooks/use-theme-alternate";
import {orDefault} from "../../../.theme/tools/orDefault";
import {AlternateI} from "../../../.theme/alternate/contracts/alternate";
import {useThemeColor} from "../../../.theme/hooks/use-theme-colors";

export const Button = ({children} : {children : React.ReactNode}) => {
    const colors : ColorsI = useThemeColor();
    const fonts : TypographyFontsI = useThemeFonts();
    const alternate : AlternateI = useThemeAlternate();

    const altered = alternate.find(item => item.name === "Button");

    const style : ButtonStyleProps = {
        background: orDefault(altered, colors.main.regular, ['style', 'background']),
        text: orDefault(altered, colors.second.tint_6, ['style', 'text']),
        font: orDefault(altered, fonts.main["4xl"], ['style', 'font']),
    }

    /*
    const style : ButtonStyleProps = {
        background: colors.main.regular,
        text: colors.secondary.tint_6,
        font: fonts.main["4xl"],
    }*/

    return (
        <Component style={style}>
            {children}
        </Component>
    );
};

Button.Label = function ButtonLabel({children} : {children : React.ReactNode}) {

    const colors : ColorsI = useThemeColor();
    const fonts : TypographyFontsI = useThemeFonts();

    const style : ButtonLabelStyleProps = {}

    return (
        <Label style={style}>
            {children}
        </Label>
    );
}
