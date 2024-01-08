import {TypographyFontsI} from "../contracts/fonts";
import {BaseThemeDefaults} from "../../base-theme/defaults";
import {TypographyConfigFontsI} from "../contracts/typography";
import {Font} from "../font/create";

export const TypographyFonts = ({ config } : {
    config: Partial<TypographyConfigFontsI>,
}) : TypographyFontsI => {
    return {
        main: {
            xs: Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.xs ? config["font-size"]?.xs : BaseThemeDefaults["font-size"].xs,
                    lineHeight: config["font-size"]?.xs ? config["font-size"]?.xs : BaseThemeDefaults["line-height"].xs,
                }
            ),
            sm: Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.sm ? config["font-size"]?.sm : BaseThemeDefaults["font-size"].sm,
                    lineHeight: config["font-size"]?.sm ? config["font-size"]?.sm : BaseThemeDefaults["line-height"].sm,
                }
            ),
            base: Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.base ? config["font-size"]?.base : BaseThemeDefaults["font-size"].base,
                    lineHeight: config["font-size"]?.base ? config["font-size"]?.base : BaseThemeDefaults["line-height"].base,
                }
            ),
            lg: Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.lg ? config["font-size"]?.lg : BaseThemeDefaults["font-size"].lg,
                    lineHeight: config["font-size"]?.lg ? config["font-size"]?.lg : BaseThemeDefaults["line-height"].lg,
                }
            ),
            xl: Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.xl ? config["font-size"]?.xl : BaseThemeDefaults["font-size"].xl,
                    lineHeight: config["font-size"]?.xl ? config["font-size"]?.xl : BaseThemeDefaults["line-height"].xl,
                }
            ),
            "2xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["2xl"] ? config["font-size"]?.["2xl"] : BaseThemeDefaults["font-size"]["2xl"],
                    lineHeight: config["font-size"]?.["2xl"] ? config["font-size"]?.["2xl"] : BaseThemeDefaults["line-height"]["2xl"],
                }
            ),
            "3xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["3xl"] ? config["font-size"]?.["3xl"] : BaseThemeDefaults["font-size"]["3xl"],
                    lineHeight: config["font-size"]?.["3xl"] ? config["font-size"]?.["3xl"] : BaseThemeDefaults["line-height"]["3xl"],
                }
            ),
            "4xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["4xl"] ? config["font-size"]?.["4xl"] : BaseThemeDefaults["font-size"]["4xl"],
                    lineHeight: config["font-size"]?.["4xl"] ? config["font-size"]?.["4xl"] : BaseThemeDefaults["line-height"]["4xl"],
                }
            ),
            "5xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["5xl"] ? config["font-size"]?.["5xl"] : BaseThemeDefaults["font-size"]["5xl"],
                    lineHeight: config["font-size"]?.["5xl"] ? config["font-size"]?.["5xl"] : BaseThemeDefaults["line-height"]["5xl"],
                }
            ),
            "6xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["6xl"] ? config["font-size"]?.["6xl"] : BaseThemeDefaults["font-size"]["6xl"],
                    lineHeight: config["font-size"]?.["6xl"] ? config["font-size"]?.["6xl"] : BaseThemeDefaults["line-height"]["6xl"],
                }
            ),
            "7xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["7xl"] ? config["font-size"]?.["7xl"] : BaseThemeDefaults["font-size"]["7xl"],
                    lineHeight: config["font-size"]?.["7xl"] ? config["font-size"]?.["7xl"] : BaseThemeDefaults["line-height"]["7xl"],
                }
            ),
            "8xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["8xl"] ? config["font-size"]?.["8xl"] : BaseThemeDefaults["font-size"]["8xl"],
                    lineHeight: config["font-size"]?.["8xl"] ? config["font-size"]?.["8xl"] : BaseThemeDefaults["line-height"]["8xl"],
                }
            ),
            "9xl": Font(
                {
                    family: config?.["font-family"]?.main ? config["font-family"].main : BaseThemeDefaults["font-family"].main,
                    fontSize: config["font-size"]?.["9xl"] ? config["font-size"]?.["9xl"] : BaseThemeDefaults["font-size"]["9xl"],
                    lineHeight: config["font-size"]?.["9xl"] ? config["font-size"]?.["9xl"] : BaseThemeDefaults["line-height"]["9xl"],
                }
            ),
        },
        secondary: {
            xs: Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.xs ? config["font-size"]?.xs : BaseThemeDefaults["font-size"].xs,
                    lineHeight: config["font-size"]?.xs ? config["font-size"]?.xs : BaseThemeDefaults["line-height"].xs,
                }
            ),
            sm: Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.sm ? config["font-size"]?.sm : BaseThemeDefaults["font-size"].sm,
                    lineHeight: config["font-size"]?.sm ? config["font-size"]?.sm : BaseThemeDefaults["line-height"].sm,
                }
            ),
            base: Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.base ? config["font-size"]?.base : BaseThemeDefaults["font-size"].base,
                    lineHeight: config["font-size"]?.base ? config["font-size"]?.base : BaseThemeDefaults["line-height"].base,
                }
            ),
            lg: Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.lg ? config["font-size"]?.lg : BaseThemeDefaults["font-size"].lg,
                    lineHeight: config["font-size"]?.lg ? config["font-size"]?.lg : BaseThemeDefaults["line-height"].lg,
                }
            ),
            xl: Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.xl ? config["font-size"]?.xl : BaseThemeDefaults["font-size"].xl,
                    lineHeight: config["font-size"]?.xl ? config["font-size"]?.xl : BaseThemeDefaults["line-height"].xl,
                }
            ),
            "2xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["2xl"] ? config["font-size"]?.["2xl"] : BaseThemeDefaults["font-size"]["2xl"],
                    lineHeight: config["font-size"]?.["2xl"] ? config["font-size"]?.["2xl"] : BaseThemeDefaults["line-height"]["2xl"],
                }
            ),
            "3xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["3xl"] ? config["font-size"]?.["3xl"] : BaseThemeDefaults["font-size"]["3xl"],
                    lineHeight: config["font-size"]?.["3xl"] ? config["font-size"]?.["3xl"] : BaseThemeDefaults["line-height"]["3xl"],
                }
            ),
            "4xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["4xl"] ? config["font-size"]?.["4xl"] : BaseThemeDefaults["font-size"]["4xl"],
                    lineHeight: config["font-size"]?.["4xl"] ? config["font-size"]?.["4xl"] : BaseThemeDefaults["line-height"]["4xl"],
                }
            ),
            "5xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["5xl"] ? config["font-size"]?.["5xl"] : BaseThemeDefaults["font-size"]["5xl"],
                    lineHeight: config["font-size"]?.["5xl"] ? config["font-size"]?.["5xl"] : BaseThemeDefaults["line-height"]["5xl"],
                }
            ),
            "6xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["6xl"] ? config["font-size"]?.["6xl"] : BaseThemeDefaults["font-size"]["6xl"],
                    lineHeight: config["font-size"]?.["6xl"] ? config["font-size"]?.["6xl"] : BaseThemeDefaults["line-height"]["6xl"],
                }
            ),
            "7xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["7xl"] ? config["font-size"]?.["7xl"] : BaseThemeDefaults["font-size"]["7xl"],
                    lineHeight: config["font-size"]?.["7xl"] ? config["font-size"]?.["7xl"] : BaseThemeDefaults["line-height"]["7xl"],
                }
            ),
            "8xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["8xl"] ? config["font-size"]?.["8xl"] : BaseThemeDefaults["font-size"]["8xl"],
                    lineHeight: config["font-size"]?.["8xl"] ? config["font-size"]?.["8xl"] : BaseThemeDefaults["line-height"]["8xl"],
                }
            ),
            "9xl": Font(
                {
                    family: config?.["font-family"]?.secondary ? config["font-family"].secondary : BaseThemeDefaults["font-family"].secondary,
                    fontSize: config["font-size"]?.["9xl"] ? config["font-size"]?.["9xl"] : BaseThemeDefaults["font-size"]["9xl"],
                    lineHeight: config["font-size"]?.["9xl"] ? config["font-size"]?.["9xl"] : BaseThemeDefaults["line-height"]["9xl"],
                }
            ),
        },
        tertiary: {
            xs: Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.xs ? config["font-size"]?.xs : BaseThemeDefaults["font-size"].xs,
                    lineHeight: config["font-size"]?.xs ? config["font-size"]?.xs : BaseThemeDefaults["line-height"].xs,
                }
            ),
            sm: Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.sm ? config["font-size"]?.sm : BaseThemeDefaults["font-size"].sm,
                    lineHeight: config["font-size"]?.sm ? config["font-size"]?.sm : BaseThemeDefaults["line-height"].sm,
                }
            ),
            base: Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.base ? config["font-size"]?.base : BaseThemeDefaults["font-size"].base,
                    lineHeight: config["font-size"]?.base ? config["font-size"]?.base : BaseThemeDefaults["line-height"].base,
                }
            ),
            lg: Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.lg ? config["font-size"]?.lg : BaseThemeDefaults["font-size"].lg,
                    lineHeight: config["font-size"]?.lg ? config["font-size"]?.lg : BaseThemeDefaults["line-height"].lg,
                }
            ),
            xl: Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.xl ? config["font-size"]?.xl : BaseThemeDefaults["font-size"].lg,
                    lineHeight: config["font-size"]?.xl ? config["font-size"]?.xl : BaseThemeDefaults["line-height"].lg,
                }
            ),
            "2xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["2xl"] ? config["font-size"]?.["2xl"] : BaseThemeDefaults["font-size"]["2xl"],
                    lineHeight: config["font-size"]?.["2xl"] ? config["font-size"]?.["2xl"] : BaseThemeDefaults["line-height"]["2xl"],
                }
            ),
            "3xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["3xl"] ? config["font-size"]?.["3xl"] : BaseThemeDefaults["font-size"]["3xl"],
                    lineHeight: config["font-size"]?.["3xl"] ? config["font-size"]?.["3xl"] : BaseThemeDefaults["line-height"]["3xl"],
                }
            ),
            "4xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["4xl"] ? config["font-size"]?.["4xl"] : BaseThemeDefaults["font-size"]["4xl"],
                    lineHeight: config["font-size"]?.["4xl"] ? config["font-size"]?.["4xl"] : BaseThemeDefaults["line-height"]["4xl"],
                }
            ),
            "5xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["5xl"] ? config["font-size"]?.["5xl"] : BaseThemeDefaults["font-size"]["5xl"],
                    lineHeight: config["font-size"]?.["5xl"] ? config["font-size"]?.["5xl"] : BaseThemeDefaults["line-height"]["5xl"],
                }
            ),
            "6xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["6xl"] ? config["font-size"]?.["6xl"] : BaseThemeDefaults["font-size"]["6xl"],
                    lineHeight: config["font-size"]?.["6xl"] ? config["font-size"]?.["6xl"] : BaseThemeDefaults["line-height"]["6xl"],
                }
            ),
            "7xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["7xl"] ? config["font-size"]?.["7xl"] : BaseThemeDefaults["font-size"]["7xl"],
                    lineHeight: config["font-size"]?.["7xl"] ? config["font-size"]?.["7xl"] : BaseThemeDefaults["line-height"]["7xl"],
                }
            ),
            "8xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["8xl"] ? config["font-size"]?.["8xl"] : BaseThemeDefaults["font-size"]["8xl"],
                    lineHeight: config["font-size"]?.["8xl"] ? config["font-size"]?.["8xl"] : BaseThemeDefaults["line-height"]["8xl"],
                }
            ),
            "9xl": Font(
                {
                    family: config?.["font-family"]?.tertiary ? config["font-family"].tertiary : BaseThemeDefaults["font-family"].tertiary,
                    fontSize: config["font-size"]?.["9xl"] ? config["font-size"]?.["9xl"] : BaseThemeDefaults["font-size"]["9xl"],
                    lineHeight: config["font-size"]?.["9xl"] ? config["font-size"]?.["9xl"] : BaseThemeDefaults["line-height"]["9xl"],
                }
            ),
        }
    }
}
