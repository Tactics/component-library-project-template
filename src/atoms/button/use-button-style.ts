import {ButtonStyleProps} from "@/atoms/button/button.style";
import {TypographyFontsI} from "@tactics/tacky/src/typography/contracts/fonts";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";
import {AlternateItem} from "@tactics/tacky/src/alternate/contracts/alternate";
import {useThemeAlternate} from "@tactics/tacky/src/hooks/use-theme-alternate";
import {ColorsI, LookupAdditionalColor, LookupAlternate, orDefault} from "@tactics/tacky";
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";

export const useButtonStyle = (): ButtonStyleProps => {

    const colors : ColorsI = useThemeColor();
    const fonts : TypographyFontsI = useThemeFonts();
    const alternates : AlternateItem[] = useThemeAlternate();

    console.log(fonts);

    const alternate = LookupAlternate(
        {
            name: "Button",
            alternates : alternates
        }
    )

    const bg_color = LookupAdditionalColor(
        {
            name :'bg_ui',
            colors: colors.additional,
            fallback : colors.primary.tint_500
        }
    );

    return {
        background: orDefault(alternate, bg_color, ['style', 'background']),
        borderColor: orDefault(alternate, colors.primary.tint_700, ['style', 'borderColor']),
        text: orDefault(alternate, colors.accent.tint_600, ['style', 'text']),
        font: orDefault(alternate, fonts.primary.md, ['style', 'font']),
    };
};