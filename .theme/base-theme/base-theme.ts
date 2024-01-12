import {BaseThemeDefaults} from "./defaults";
import {ThemeI, ThemeVariantsI} from "../theme/contracts/theme";
import {Font} from "../typography/font/create";

const baseThemeConfig : ThemeI = {
    alternate: [],
    typography: {
        resources: [],
        fonts: {
            main: {
                xs: Font(
                    {
                        base: BaseThemeDefaults.fontSize.xs + '/' + BaseThemeDefaults.lineHeight.xs + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                sm: Font(
                    {
                        base: BaseThemeDefaults.fontSize.sm + '/' + BaseThemeDefaults.lineHeight.sm + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                standard: Font(
                    {
                        base: BaseThemeDefaults.fontSize.standard + '/' + BaseThemeDefaults.lineHeight.standard + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                lg: Font(
                    {
                        base: BaseThemeDefaults.fontSize.lg + '/' + BaseThemeDefaults.lineHeight.lg + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                xl: Font(
                    {
                        base: BaseThemeDefaults.fontSize.xl + '/' + BaseThemeDefaults.lineHeight.xl + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "2xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["2xl"] + '/' + BaseThemeDefaults.lineHeight["2xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "3xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["3xl"] + '/' + BaseThemeDefaults.lineHeight["3xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "4xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["4xl"] + '/' + BaseThemeDefaults.lineHeight["4xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "5xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["5xl"] + '/' + BaseThemeDefaults.lineHeight["5xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "6xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["6xl"] + '/' + BaseThemeDefaults.lineHeight["6xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "7xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["7xl"] + '/' + BaseThemeDefaults.lineHeight["7xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "8xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["8xl"] + '/' + BaseThemeDefaults.lineHeight["8xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
                "9xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["9xl"] + '/' + BaseThemeDefaults.lineHeight["9xl"] + ' ' + BaseThemeDefaults.fontFamily.main,
                        config: {}
                    }
                ),
            },
            second: {
                xs: Font(
                    {
                        base: BaseThemeDefaults.fontSize.xs + '/' + BaseThemeDefaults.lineHeight.xs + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                sm: Font(
                    {
                        base: BaseThemeDefaults.fontSize.sm + '/' + BaseThemeDefaults.lineHeight.sm + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                standard: Font(
                    {
                        base: BaseThemeDefaults.fontSize.standard + '/' + BaseThemeDefaults.lineHeight.standard + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                lg: Font(
                    {
                        base: BaseThemeDefaults.fontSize.lg + '/' + BaseThemeDefaults.lineHeight.lg + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                xl: Font(
                    {
                        base: BaseThemeDefaults.fontSize.xl + '/' + BaseThemeDefaults.lineHeight.xl + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "2xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["2xl"] + '/' + BaseThemeDefaults.lineHeight["2xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "3xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["3xl"] + '/' + BaseThemeDefaults.lineHeight["3xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "4xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["4xl"] + '/' + BaseThemeDefaults.lineHeight["4xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "5xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["5xl"] + '/' + BaseThemeDefaults.lineHeight["5xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "6xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["6xl"] + '/' + BaseThemeDefaults.lineHeight["6xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "7xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["7xl"] + '/' + BaseThemeDefaults.lineHeight["7xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "8xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["8xl"] + '/' + BaseThemeDefaults.lineHeight["8xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
                "9xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["9xl"] + '/' + BaseThemeDefaults.lineHeight["9xl"] + ' ' + BaseThemeDefaults.fontFamily.second,
                        config: {}
                    }
                ),
            },
            third: {
                xs: Font(
                    {
                        base: BaseThemeDefaults.fontSize.xs + '/' + BaseThemeDefaults.lineHeight.xs + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                sm: Font(
                    {
                        base: BaseThemeDefaults.fontSize.sm + '/' + BaseThemeDefaults.lineHeight.sm + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                standard: Font(
                    {
                        base: BaseThemeDefaults.fontSize.standard + '/' + BaseThemeDefaults.lineHeight.standard + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                lg: Font(
                    {
                        base: BaseThemeDefaults.fontSize.lg + '/' + BaseThemeDefaults.lineHeight.lg + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                xl: Font(
                    {
                        base: BaseThemeDefaults.fontSize.xl + '/' + BaseThemeDefaults.lineHeight.xl + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "2xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["2xl"] + '/' + BaseThemeDefaults.lineHeight["2xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "3xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["3xl"] + '/' + BaseThemeDefaults.lineHeight["3xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "4xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["4xl"] + '/' + BaseThemeDefaults.lineHeight["4xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "5xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["5xl"] + '/' + BaseThemeDefaults.lineHeight["5xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "6xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["6xl"] + '/' + BaseThemeDefaults.lineHeight["6xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "7xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["7xl"] + '/' + BaseThemeDefaults.lineHeight["7xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "8xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["8xl"] + '/' + BaseThemeDefaults.lineHeight["8xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
                "9xl": Font(
                    {
                        base: BaseThemeDefaults.fontSize["9xl"] + '/' + BaseThemeDefaults.lineHeight["9xl"] + ' ' + BaseThemeDefaults.fontFamily.third,
                        config: {}
                    }
                ),
            }
        }
    },
    colors: {
        /*
            ui: {
                black: '#000000',
                white: '#FFFFFF',
                grey: {
                    tint_1: '#333333',
                    tint_2: '#333333',
                    regular: '#333333',
                    tint_4: '#333333',
                    tint_5: '#333333',
                },
                error: {
                    tint_1: '#333333',
                    tint_2: '#333333',
                    regular: '#333333',
                    tint_4: '#333333',
                    tint_5: '#333333',
                },
                warning: {
                    tint_1: '#333333',
                    tint_2: '#333333',
                    regular: '#333333',
                    tint_4: '#333333',
                    tint_5: '#333333',
                },
                success: {
                    tint_1: '#333333',
                    tint_2: '#333333',
                    regular: '#333333',
                    tint_4: '#333333',
                    tint_5: '#333333',
                },
                info: {
                    tint_1: '#333333',
                    tint_2: '#333333',
                    regular: '#333333',
                    tint_4: '#333333',
                    tint_5: '#333333',
                },
            },
             */
        main: {
            tint_1: '#333333',
            tint_2: '#333333',
            tint_3: '#333333',
            tint_4: '#333333',
            regular: '#333333',
            tint_6: '#FFFFFF',
            tint_7: '#FFFFFF',
            tint_8: '#FFFFFF',
            tint_9: '#FFFFFF'
        },
        second: {
            tint_1: '#333333',
            tint_2: '#333333',
            tint_3: '#333333',
            tint_4: '#333333',
            regular: '#333333',
            tint_6: '#FFFFFF',
            tint_7: '#FFFFFF',
            tint_8: '#FFFFFF',
            tint_9: '#FFFFFF'
        },
        third: {
            tint_1: '#333333',
            tint_2: '#333333',
            tint_3: '#333333',
            tint_4: '#333333',
            regular: '#333333',
            tint_6: '#FFFFFF',
            tint_7: '#FFFFFF',
            tint_8: '#FFFFFF',
            tint_9: '#FFFFFF'
        },
    }
}

export const BaseTheme : ThemeVariantsI = {
    standard: baseThemeConfig,
    inverted: baseThemeConfig,
    contrast: baseThemeConfig
}

