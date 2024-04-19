import React from "react";
import {Button} from "./button";
import {ColorsI, LookupAdditionalColor, orDefault} from "@tactics/tacky";
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";
import {TypographyFontsI} from "@tactics/tacky/src/typography/contracts/fonts";
import {AlternateItem} from "@tactics/tacky/src/alternate/contracts/alternate";
import {useThemeAlternate} from "@tactics/tacky/src/hooks/use-theme-alternate";
import {ButtonStyleProps} from "./button.style";

export const ThemedButton = ({label} : {label : string}) => {

    const colors : ColorsI = useThemeColor();
    const fonts : TypographyFontsI = useThemeFonts();
    const alternate : AlternateItem[] = useThemeAlternate();

    const altered = alternate.find(item => item.name === "Button");

    const bg_color = LookupAdditionalColor(
        {
            name :'bg_ui',
            colors: colors.additional,
            fallback : colors.primary.tint_500
        }
    );

    console.log(bg_color);

    const style : ButtonStyleProps = {
        background: orDefault(altered, bg_color, ['style', 'background']),
        borderColor: orDefault(altered, colors.primary.tint_700, ['style', 'borderColor']),
        text: orDefault(altered, colors.accent.tint_600, ['style', 'text']),
        font: orDefault(altered, fonts.primary.md, ['style', 'font']),
    }
    
    return (
        <Button style={style}>
            <Button.Label>{label}</Button.Label>
        </Button>
    );
}