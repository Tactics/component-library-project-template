import {TypographyFontsConfigI, TypographyFontsI} from "../contracts/fonts";
import {Font} from "../font/create";
import {orDefault} from "../../tools/orDefault";
import {
    baseThemeConfigAccentFont,
    baseThemeConfigPrimaryFont,
    baseThemeConfigScale2Xl,
    baseThemeConfigScale3Xl,
    baseThemeConfigScale4Xl,
    baseThemeConfigScale5Xl,
    baseThemeConfigScale6Xl,
    baseThemeConfigScale7Xl,
    baseThemeConfigScale8Xl,
    baseThemeConfigScale9Xl,
    baseThemeConfigScaleLg,
    baseThemeConfigScaleMd,
    baseThemeConfigScaleSm,
    baseThemeConfigScaleXl,
    baseThemeConfigScaleXs,
    baseThemeConfigSupportingFont
} from "../../base-theme/base-theme";

export const TypographyFonts = ({ base, config } : {
    base: TypographyFontsI,
    config: TypographyFontsConfigI,
}) : TypographyFontsI => {

    // Base
    const primaryFont = orDefault(
        config,
        baseThemeConfigPrimaryFont,
        ['family', 'primary']
    );

    const accentFont = orDefault(
        config,
        orDefault(
            config,
            baseThemeConfigAccentFont,
            ['family', 'primary']
        ),
        ['family', 'accent']
    );

    const supportingFont = orDefault(
        config,
        orDefault(
            config,
            baseThemeConfigSupportingFont,
            ['family', 'primary']
        ),
        ['family', 'supporting']
    );


    const mdScale = orDefault(
      config,
        baseThemeConfigScaleMd,
        ['scale', 'md']
    );

    const smScale = orDefault(
        config,
        baseThemeConfigScaleSm,
        ['scale', 'sm']
    );

    const xsScale = orDefault(
        config,
        baseThemeConfigScaleXs,
        ['scale', 'xs']
    );

    const lgScale = orDefault(
        config,
        baseThemeConfigScaleLg,
        ['scale', 'lg']
    );

    const xlScale = orDefault(
        config,
        baseThemeConfigScaleXl,
        ['scale', 'xl']
    );

    const xl2Scale = orDefault(
        config,
        baseThemeConfigScale2Xl,
        ['scale', '2xl']
    );

    const xl3Scale = orDefault(
        config,
        baseThemeConfigScale3Xl,
        ['scale', '3xl']
    );

    const xl4Scale = orDefault(
        config,
        baseThemeConfigScale4Xl,
        ['scale', '4xl']
    );

    const xl5Scale = orDefault(
        config,
        baseThemeConfigScale5Xl,
        ['scale', '5xl']
    );

    const xl6Scale = orDefault(
        config,
        baseThemeConfigScale6Xl,
        ['scale', '6xl']
    );

    const xl7Scale = orDefault(
        config,
        baseThemeConfigScale7Xl,
        ['scale', '7xl']
    );

    const xl8Scale = orDefault(
        config,
        baseThemeConfigScale8Xl,
        ['scale', '8xl']
    );

    const xl9Scale = orDefault(
        config,
        baseThemeConfigScale9Xl,
        ['scale', '9xl']
    );

    return {
        primary: {
            xs: Font(
                {
                    family: primaryFont,
                    scale: xsScale
                }
            ),
            sm: Font(
                {
                    family: primaryFont,
                    scale: smScale
                }
            ),
            md: Font(
                {
                    family: primaryFont,
                    scale: mdScale
                }
            ),
            lg: Font(
                {
                    family: primaryFont,
                    scale: lgScale
                }
            ),
            xl: Font(
                {
                    family: primaryFont,
                    scale: xlScale
                }
            ),
            "2xl": Font(
                {
                    family: primaryFont,
                    scale: xl2Scale
                }
            ),
            "3xl": Font(
                {
                    family: primaryFont,
                    scale: xl3Scale
                }
            ),
            "4xl": Font(
                {
                    family: primaryFont,
                    scale: xl4Scale
                }
            ),
            "5xl": Font(
                {
                    family: primaryFont,
                    scale: xl5Scale
                }
            ),
            "6xl": Font(
                {
                    family: primaryFont,
                    scale: xl6Scale
                }
            ),
            "7xl": Font(
                {
                    family: primaryFont,
                    scale: xl7Scale
                }
            ),
            "8xl": Font(
                {
                    family: primaryFont,
                    scale: xl8Scale
                }
            ),
            "9xl": Font(
                {
                    family: primaryFont,
                    scale: xl9Scale
                }
            ),
        },
        accent: {
            xs: Font(
                {
                    family: accentFont,
                    scale: xsScale
                }
            ),
            sm: Font(
                {
                    family: accentFont,
                    scale: smScale
                }
            ),
            md: Font(
                {
                    family: accentFont,
                    scale: mdScale
                }
            ),
            lg: Font(
                {
                    family: accentFont,
                    scale: lgScale
                }
            ),
            xl: Font(
                {
                    family: accentFont,
                    scale: xlScale
                }
            ),
            "2xl": Font(
                {
                    family: accentFont,
                    scale: xl2Scale
                }
            ),
            "3xl": Font(
                {
                    family: accentFont,
                    scale: xl3Scale
                }
            ),
            "4xl": Font(
                {
                    family: accentFont,
                    scale: xl4Scale
                }
            ),
            "5xl": Font(
                {
                    family: accentFont,
                    scale: xl5Scale
                }
            ),
            "6xl": Font(
                {
                    family: accentFont,
                    scale: xl6Scale
                }
            ),
            "7xl": Font(
                {
                    family: accentFont,
                    scale: xl7Scale
                }
            ),
            "8xl": Font(
                {
                    family: accentFont,
                    scale: xl8Scale
                }
            ),
            "9xl": Font(
                {
                    family: accentFont,
                    scale: xl9Scale
                }
            ),
        },
        supporting: {
            xs: Font(
                {
                    family: supportingFont,
                    scale: xsScale
                }
            ),
            sm: Font(
                {
                    family: supportingFont,
                    scale: smScale
                }
            ),
            md: Font(
                {
                    family: supportingFont,
                    scale: mdScale
                }
            ),
            lg: Font(
                {
                    family: supportingFont,
                    scale: lgScale
                }
            ),
            xl: Font(
                {
                    family: supportingFont,
                    scale: xlScale
                }
            ),
            "2xl": Font(
                {
                    family: supportingFont,
                    scale: xl2Scale
                }
            ),
            "3xl": Font(
                {
                    family: supportingFont,
                    scale: xl3Scale
                }
            ),
            "4xl": Font(
                {
                    family: supportingFont,
                    scale: xl4Scale
                }
            ),
            "5xl": Font(
                {
                    family: supportingFont,
                    scale: xl5Scale
                }
            ),
            "6xl": Font(
                {
                    family: supportingFont,
                    scale: xl6Scale
                }
            ),
            "7xl": Font(
                {
                    family: supportingFont,
                    scale: xl7Scale
                }
            ),
            "8xl": Font(
                {
                    family: supportingFont,
                    scale: xl8Scale
                }
            ),
            "9xl": Font(
                {
                    family: supportingFont,
                    scale: xl9Scale
                }
            ),
        }
    }
}
