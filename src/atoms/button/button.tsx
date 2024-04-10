import React from 'react';
import {useThemeFonts} from "../../../.tacky/hooks/use-theme-fonts";
import {
    Button as Component,
    ButtonLabel as Label,
    ButtonLabelStyleProps,
    ButtonStyleProps
} from "./button.style";
import {ColorsI} from "../../../.tacky/colors/contracts/colors";
import {TypographyFontsI} from "../../../.tacky/typography/contracts/fonts";
import {useThemeColor} from "../../../.tacky/hooks/use-theme-colors";

export const Button = ({children, style} : {children : React.ReactNode, style : ButtonStyleProps}) => {
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
