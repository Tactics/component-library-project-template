import React from 'react';
import {
    Button as Component,
    ButtonLabel as Label,
    ButtonLabelStyleProps,
    ButtonStyleProps
} from "./button.style";
import {ColorsI} from "@tactics/tacky";
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";
import {TypographyFontsI} from "@tactics/tacky/src/typography/contracts/fonts";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";

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
