import React from "react";
import {Button} from "./button";
import {ColorsI} from "../../../.tacky/colors/contracts/colors";
import {useThemeColor} from "../../../.tacky/hooks/use-theme-colors";
import {TypographyFontsI} from "../../../.tacky/typography/contracts/fonts";
import {useThemeFonts} from "../../../.tacky/hooks/use-theme-fonts";
import {AlternateItem} from "../../../.tacky/alternate/contracts/alternate";
import {useThemeAlternate} from "../../../.tacky/hooks/use-theme-alternate";
import {ButtonStyleProps} from "@/atoms/button/button.style";
import {orDefault} from "../../../.tacky/tools/orDefault";

export const ThemedButton = () => {

    const colors : ColorsI = useThemeColor();
    const fonts : TypographyFontsI = useThemeFonts();
    const alternate : AlternateItem[] = useThemeAlternate();

    const altered = alternate.find(item => item.name === "Button");

    const style : ButtonStyleProps = {
        background: orDefault(altered, colors.primary.tint_500, ['style', 'background']),
        borderColor: orDefault(altered, colors.primary.tint_700, ['style', 'borderColor']),
        text: orDefault(altered, colors.accent.tint_600, ['style', 'text']),
        font: orDefault(altered, fonts.primary.md, ['style', 'font']),
    }
    
    return (
        <Button style={style}>
            <Button.Label>My Label</Button.Label>
        </Button>
    );
}