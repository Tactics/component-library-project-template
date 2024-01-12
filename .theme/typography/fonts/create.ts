import {TypographyFontsI} from "../contracts/fonts";
import {BaseThemeDefaults} from "../../base-theme/defaults";
import {Font} from "../font/create";
import {TypographyFontsConfigI} from "../contracts/typography";

export const TypographyFonts = ({ base, config } : {
    base: TypographyFontsI,
    config: TypographyFontsConfigI,
}) : TypographyFontsI => {

    return {
        main: {
            xs: Font(
                {
                    base: base.main.xs,
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.xs ? config.fontSize?.xs : BaseThemeDefaults.fontSize.xs,
                        lineHeight: config.fontSize?.xs ? config.fontSize?.xs : BaseThemeDefaults.lineHeight.xs
                    }
                }
            ),
            sm: Font(
                {
                    base: base.main.xs,
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.sm ? config.fontSize?.sm : BaseThemeDefaults.fontSize.sm,
                        lineHeight: config.fontSize?.sm ? config.fontSize?.sm : BaseThemeDefaults.lineHeight.sm
                    }
                }
            ),
            standard: Font(
                {
                    base: base.main.standard,
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.standard ? config.fontSize?.standard : BaseThemeDefaults.fontSize.standard,
                        lineHeight: config.fontSize?.standard ? config.fontSize?.standard : BaseThemeDefaults.lineHeight.standard,
                    }
                }
            ),
            lg: Font(
                {
                    base: base.main.lg,
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.lg ? config.fontSize?.lg : BaseThemeDefaults.fontSize.lg,
                        lineHeight: config.fontSize?.lg ? config.fontSize?.lg : BaseThemeDefaults.lineHeight.lg,
                    }
                }
            ),
            xl: Font(
                {
                    base: base.main.xl,
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.xl ? config.fontSize?.xl : BaseThemeDefaults.fontSize.xl,
                        lineHeight: config.fontSize?.xl ? config.fontSize?.xl : BaseThemeDefaults.lineHeight.xl
                    }
                }
            ),
            "2xl": Font(
                {
                    base: base.main["2xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["2xl"] ? config.fontSize?.["2xl"] : BaseThemeDefaults.fontSize["2xl"],
                        lineHeight: config.fontSize?.["2xl"] ? config.fontSize?.["2xl"] : BaseThemeDefaults.lineHeight["2xl"]
                    }
                }
            ),
            "3xl": Font(
                {
                    base: base.main["3xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["3xl"] ? config.fontSize?.["3xl"] : BaseThemeDefaults.fontSize["3xl"],
                        lineHeight: config.fontSize?.["3xl"] ? config.fontSize?.["3xl"] : BaseThemeDefaults.lineHeight["3xl"]
                    }
                }
            ),
            "4xl": Font(
                {
                    base: base.main["4xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["4xl"] ? config.fontSize?.["4xl"] : BaseThemeDefaults.fontSize["4xl"],
                        lineHeight: config.fontSize?.["4xl"] ? config.fontSize?.["4xl"] : BaseThemeDefaults.lineHeight["4xl"]
                    }
                }
            ),
            "5xl": Font(
                {
                    base: base.main["5xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["5xl"] ? config.fontSize?.["5xl"] : BaseThemeDefaults.fontSize["5xl"],
                        lineHeight: config.fontSize?.["5xl"] ? config.fontSize?.["5xl"] : BaseThemeDefaults.lineHeight["5xl"]
                    }
                }
            ),
            "6xl": Font(
                {
                    base: base.main["6xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["6xl"] ? config.fontSize?.["6xl"] : BaseThemeDefaults.fontSize["6xl"],
                        lineHeight: config.fontSize?.["6xl"] ? config.fontSize?.["6xl"] : BaseThemeDefaults.lineHeight["6xl"]
                    }
                }
            ),
            "7xl": Font(
                {
                    base: base.main["7xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["7xl"] ? config.fontSize?.["7xl"] : BaseThemeDefaults.fontSize["7xl"],
                        lineHeight: config.fontSize?.["7xl"] ? config.fontSize?.["7xl"] : BaseThemeDefaults.lineHeight["7xl"]
                    }
                }
            ),
            "8xl": Font(
                {
                    base: base.main["8xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["8xl"] ? config.fontSize?.["8xl"] : BaseThemeDefaults.fontSize["8xl"],
                        lineHeight: config.fontSize?.["8xl"] ? config.fontSize?.["8xl"] : BaseThemeDefaults.lineHeight["8xl"]
                    }
                }
            ),
            "9xl": Font(
                {
                    base: base.main["9xl"],
                    config: {
                        family: config?.fontFamily?.main ? config.fontFamily.main : BaseThemeDefaults.fontFamily.main,
                        fontSize: config.fontSize?.["9xl"] ? config.fontSize?.["9xl"] : BaseThemeDefaults.fontSize["9xl"],
                        lineHeight: config.fontSize?.["9xl"] ? config.fontSize?.["9xl"] : BaseThemeDefaults.lineHeight["9xl"]
                    }
                }
            ),
        },
        second: {
            xs: Font(
                {
                    base: base.second.xs,
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.xs ? config.fontSize?.xs : BaseThemeDefaults.fontSize.xs,
                        lineHeight: config.fontSize?.xs ? config.fontSize?.xs : BaseThemeDefaults.lineHeight.xs,
                    }
                }
            ),
            sm: Font(
                {
                    base: base.second.sm,
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.sm ? config.fontSize?.sm : BaseThemeDefaults.fontSize.sm,
                        lineHeight: config.fontSize?.sm ? config.fontSize?.sm : BaseThemeDefaults.lineHeight.sm
                    }
                }
            ),
            standard: Font(
                {
                    base: base.second.standard,
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.standard ? config.fontSize?.standard : BaseThemeDefaults.fontSize.standard,
                        lineHeight: config.fontSize?.standard ? config.fontSize?.standard : BaseThemeDefaults.lineHeight.standard
                    }
                }
            ),
            lg: Font(
                {
                    base: base.second.lg,
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.lg ? config.fontSize?.lg : BaseThemeDefaults.fontSize.lg,
                        lineHeight: config.fontSize?.lg ? config.fontSize?.lg : BaseThemeDefaults.lineHeight.lg
                    }
                }
            ),
            xl: Font(
                {
                    base: base.second.xl,
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.xl ? config.fontSize?.xl : BaseThemeDefaults.fontSize.xl,
                        lineHeight: config.fontSize?.xl ? config.fontSize?.xl : BaseThemeDefaults.lineHeight.xl
                    }
                }
            ),
            "2xl": Font(
                {
                    base: base.second["2xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["2xl"] ? config.fontSize?.["2xl"] : BaseThemeDefaults.fontSize["2xl"],
                        lineHeight: config.fontSize?.["2xl"] ? config.fontSize?.["2xl"] : BaseThemeDefaults.lineHeight["2xl"]
                    }
                }
            ),
            "3xl": Font(
                {
                    base: base.second["3xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["3xl"] ? config.fontSize?.["3xl"] : BaseThemeDefaults.fontSize["3xl"],
                        lineHeight: config.fontSize?.["3xl"] ? config.fontSize?.["3xl"] : BaseThemeDefaults.lineHeight["3xl"]
                    }
                }
            ),
            "4xl": Font(
                {
                    base: base.second["4xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["4xl"] ? config.fontSize?.["4xl"] : BaseThemeDefaults.fontSize["4xl"],
                        lineHeight: config.fontSize?.["4xl"] ? config.fontSize?.["4xl"] : BaseThemeDefaults.lineHeight["4xl"]
                    }
                }
            ),
            "5xl": Font(
                {
                    base: base.second["5xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["5xl"] ? config.fontSize?.["5xl"] : BaseThemeDefaults.fontSize["5xl"],
                        lineHeight: config.fontSize?.["5xl"] ? config.fontSize?.["5xl"] : BaseThemeDefaults.lineHeight["5xl"]
                    }
                }
            ),
            "6xl": Font(
                {
                    base: base.second["6xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["6xl"] ? config.fontSize?.["6xl"] : BaseThemeDefaults.fontSize["6xl"],
                        lineHeight: config.fontSize?.["6xl"] ? config.fontSize?.["6xl"] : BaseThemeDefaults.lineHeight["6xl"]
                    }
                }
            ),
            "7xl": Font(
                {
                    base: base.second["7xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["7xl"] ? config.fontSize?.["7xl"] : BaseThemeDefaults.fontSize["7xl"],
                        lineHeight: config.fontSize?.["7xl"] ? config.fontSize?.["7xl"] : BaseThemeDefaults.lineHeight["7xl"]
                    }
                }
            ),
            "8xl": Font(
                {
                    base: base.second["8xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["8xl"] ? config.fontSize?.["8xl"] : BaseThemeDefaults.fontSize["8xl"],
                        lineHeight: config.fontSize?.["8xl"] ? config.fontSize?.["8xl"] : BaseThemeDefaults.lineHeight["8xl"]
                    }
                }
            ),
            "9xl": Font(
                {
                    base: base.second["9xl"],
                    config: {
                        family: config?.fontFamily?.second ? config.fontFamily.second : BaseThemeDefaults.fontFamily.second,
                        fontSize: config.fontSize?.["9xl"] ? config.fontSize?.["9xl"] : BaseThemeDefaults.fontSize["9xl"],
                        lineHeight: config.fontSize?.["9xl"] ? config.fontSize?.["9xl"] : BaseThemeDefaults.lineHeight["9xl"]
                    }
                }
            ),
        },
        third: {
            xs: Font(
                {
                    base: base.third.xs,
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.xs ? config.fontSize?.xs : BaseThemeDefaults.fontSize.xs,
                        lineHeight: config.fontSize?.xs ? config.fontSize?.xs : BaseThemeDefaults.lineHeight.xs
                    }
                }
            ),
            sm: Font(
                {
                    base: base.third.sm,
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.sm ? config.fontSize?.sm : BaseThemeDefaults.fontSize.sm,
                        lineHeight: config.fontSize?.sm ? config.fontSize?.sm : BaseThemeDefaults.lineHeight.sm
                    }
                }
            ),
            standard: Font(
                {
                    base: base.third.standard,
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.standard ? config.fontSize?.standard : BaseThemeDefaults.fontSize.standard,
                        lineHeight: config.fontSize?.standard ? config.fontSize?.standard : BaseThemeDefaults.lineHeight.standard
                    }
                }
            ),
            lg: Font(
                {
                    base: base.third.lg,
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.lg ? config.fontSize?.lg : BaseThemeDefaults.fontSize.lg,
                        lineHeight: config.fontSize?.lg ? config.fontSize?.lg : BaseThemeDefaults.lineHeight.lg
                    }
                }
            ),
            xl: Font(
                {
                    base: base.third.xl,
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.xl ? config.fontSize?.xl : BaseThemeDefaults.fontSize.xl,
                        lineHeight: config.fontSize?.xl ? config.fontSize?.xl : BaseThemeDefaults.lineHeight.xl
                    }
                }
            ),
            "2xl": Font(
                {
                    base: base.third["2xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["2xl"] ? config.fontSize?.["2xl"] : BaseThemeDefaults.fontSize["2xl"],
                        lineHeight: config.fontSize?.["2xl"] ? config.fontSize?.["2xl"] : BaseThemeDefaults.lineHeight["2xl"]
                    }
                }
            ),
            "3xl": Font(
                {
                    base: base.third["3xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["3xl"] ? config.fontSize?.["3xl"] : BaseThemeDefaults.fontSize["3xl"],
                        lineHeight: config.fontSize?.["3xl"] ? config.fontSize?.["3xl"] : BaseThemeDefaults.lineHeight["3xl"]
                    }
                }
            ),
            "4xl": Font(
                {
                    base: base.third["4xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["4xl"] ? config.fontSize?.["4xl"] : BaseThemeDefaults.fontSize["4xl"],
                        lineHeight: config.fontSize?.["4xl"] ? config.fontSize?.["4xl"] : BaseThemeDefaults.lineHeight["4xl"]
                    }
                }
            ),
            "5xl": Font(
                {
                    base: base.third["5xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["5xl"] ? config.fontSize?.["5xl"] : BaseThemeDefaults.fontSize["5xl"],
                        lineHeight: config.fontSize?.["5xl"] ? config.fontSize?.["5xl"] : BaseThemeDefaults.lineHeight["5xl"]
                    }
                }
            ),
            "6xl": Font(
                {
                    base: base.third["6xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["6xl"] ? config.fontSize?.["6xl"] : BaseThemeDefaults.fontSize["6xl"],
                        lineHeight: config.fontSize?.["6xl"] ? config.fontSize?.["6xl"] : BaseThemeDefaults.lineHeight["6xl"]
                    }
                }
            ),
            "7xl": Font(
                {
                    base: base.third["7xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["7xl"] ? config.fontSize?.["7xl"] : BaseThemeDefaults.fontSize["7xl"],
                        lineHeight: config.fontSize?.["7xl"] ? config.fontSize?.["7xl"] : BaseThemeDefaults.lineHeight["7xl"]
                    }
                }
            ),
            "8xl": Font(
                {
                    base: base.third["8xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["8xl"] ? config.fontSize?.["8xl"] : BaseThemeDefaults.fontSize["8xl"],
                        lineHeight: config.fontSize?.["8xl"] ? config.fontSize?.["8xl"] : BaseThemeDefaults.lineHeight["8xl"]
                    }
                }
            ),
            "9xl": Font(
                {
                    base: base.third["9xl"],
                    config: {
                        family: config?.fontFamily?.third ? config.fontFamily.third : BaseThemeDefaults.fontFamily.third,
                        fontSize: config.fontSize?.["9xl"] ? config.fontSize?.["9xl"] : BaseThemeDefaults.fontSize["9xl"],
                        lineHeight: config.fontSize?.["9xl"] ? config.fontSize?.["9xl"] : BaseThemeDefaults.lineHeight["9xl"]
                    }
                }
            ),
        }
    }
}
