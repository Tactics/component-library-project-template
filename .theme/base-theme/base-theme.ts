import {BaseThemeDefaults} from "./defaults";
import {ThemeI} from "../theme/contracts/theme";

export const BaseTheme : ThemeI = {
    typography: {
        resources: [],
        fonts: {
            main: {
                xs: BaseThemeDefaults["font-size"].xs + '/' + BaseThemeDefaults["line-height"].xs + ' ' + BaseThemeDefaults["font-family"].main,
                sm: BaseThemeDefaults["font-size"].sm + '/' + BaseThemeDefaults["line-height"].sm + ' ' + BaseThemeDefaults["font-family"].main,
                base: BaseThemeDefaults["font-size"].base + '/' + BaseThemeDefaults["line-height"].base + ' ' + BaseThemeDefaults["font-family"].main,
                lg: BaseThemeDefaults["font-size"].lg + '/' + BaseThemeDefaults["line-height"].lg + ' ' + BaseThemeDefaults["font-family"].main,
                xl: BaseThemeDefaults["font-size"].xl + '/' + BaseThemeDefaults["line-height"].xl + ' ' + BaseThemeDefaults["font-family"].main,
                "2xl": BaseThemeDefaults["font-size"]["2xl"] + '/' + BaseThemeDefaults["line-height"]["2xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "3xl": BaseThemeDefaults["font-size"]["3xl"] + '/' + BaseThemeDefaults["line-height"]["3xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "4xl": BaseThemeDefaults["font-size"]["4xl"] + '/' + BaseThemeDefaults["line-height"]["4xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "5xl": BaseThemeDefaults["font-size"]["5xl"] + '/' + BaseThemeDefaults["line-height"]["5xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "6xl": BaseThemeDefaults["font-size"]["6xl"] + '/' + BaseThemeDefaults["line-height"]["6xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "7xl": BaseThemeDefaults["font-size"]["7xl"] + '/' + BaseThemeDefaults["line-height"]["7xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "8xl": BaseThemeDefaults["font-size"]["8xl"] + '/' + BaseThemeDefaults["line-height"]["8xl"] + ' ' + BaseThemeDefaults["font-family"].main,
                "9xl": BaseThemeDefaults["font-size"]["9xl"] + '/' + BaseThemeDefaults["line-height"]["9xl"] + ' ' + BaseThemeDefaults["font-family"].main,
            },
            secondary: {
                xs: BaseThemeDefaults["font-size"].xs + '/' + BaseThemeDefaults["line-height"].xs + ' ' + BaseThemeDefaults["font-family"].secondary,
                sm: BaseThemeDefaults["font-size"].sm + '/' + BaseThemeDefaults["line-height"].sm + ' ' + BaseThemeDefaults["font-family"].secondary,
                base: BaseThemeDefaults["font-size"].base + '/' + BaseThemeDefaults["line-height"].base + ' ' + BaseThemeDefaults["font-family"].secondary,
                lg: BaseThemeDefaults["font-size"].lg + '/' + BaseThemeDefaults["line-height"].lg + ' ' + BaseThemeDefaults["font-family"].secondary,
                xl: BaseThemeDefaults["font-size"].xl + '/' + BaseThemeDefaults["line-height"].xl + ' ' + BaseThemeDefaults["font-family"].secondary,
                "2xl": BaseThemeDefaults["font-size"]["2xl"] + '/' + BaseThemeDefaults["line-height"]["2xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "3xl": BaseThemeDefaults["font-size"]["3xl"] + '/' + BaseThemeDefaults["line-height"]["3xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "4xl": BaseThemeDefaults["font-size"]["4xl"] + '/' + BaseThemeDefaults["line-height"]["4xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "5xl": BaseThemeDefaults["font-size"]["5xl"] + '/' + BaseThemeDefaults["line-height"]["5xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "6xl": BaseThemeDefaults["font-size"]["6xl"] + '/' + BaseThemeDefaults["line-height"]["6xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "7xl": BaseThemeDefaults["font-size"]["7xl"] + '/' + BaseThemeDefaults["line-height"]["7xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "8xl": BaseThemeDefaults["font-size"]["8xl"] + '/' + BaseThemeDefaults["line-height"]["8xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
                "9xl": BaseThemeDefaults["font-size"]["9xl"] + '/' + BaseThemeDefaults["line-height"]["9xl"] + ' ' + BaseThemeDefaults["font-family"].secondary,
            },
            tertiary: {
                xs: BaseThemeDefaults["font-size"].xs + '/' + BaseThemeDefaults["line-height"].xs + ' ' + BaseThemeDefaults["font-family"].tertiary,
                sm: BaseThemeDefaults["font-size"].sm + '/' + BaseThemeDefaults["line-height"].sm + ' ' + BaseThemeDefaults["font-family"].tertiary,
                base: BaseThemeDefaults["font-size"].base + '/' + BaseThemeDefaults["line-height"].base + ' ' + BaseThemeDefaults["font-family"].tertiary,
                lg: BaseThemeDefaults["font-size"].lg + '/' + BaseThemeDefaults["line-height"].lg + ' ' + BaseThemeDefaults["font-family"].tertiary,
                xl: BaseThemeDefaults["font-size"].xl + '/' + BaseThemeDefaults["line-height"].xl + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "2xl": BaseThemeDefaults["font-size"]["2xl"] + '/' + BaseThemeDefaults["line-height"]["2xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "3xl": BaseThemeDefaults["font-size"]["3xl"] + '/' + BaseThemeDefaults["line-height"]["3xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "4xl": BaseThemeDefaults["font-size"]["4xl"] + '/' + BaseThemeDefaults["line-height"]["4xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "5xl": BaseThemeDefaults["font-size"]["5xl"] + '/' + BaseThemeDefaults["line-height"]["5xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "6xl": BaseThemeDefaults["font-size"]["6xl"] + '/' + BaseThemeDefaults["line-height"]["6xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "7xl": BaseThemeDefaults["font-size"]["7xl"] + '/' + BaseThemeDefaults["line-height"]["7xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "8xl": BaseThemeDefaults["font-size"]["8xl"] + '/' + BaseThemeDefaults["line-height"]["8xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
                "9xl": BaseThemeDefaults["font-size"]["9xl"] + '/' + BaseThemeDefaults["line-height"]["9xl"] + ' ' + BaseThemeDefaults["font-family"].tertiary,
            }
        }
    },
    colors: {
        light: {
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
            secondary: {
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
            tertiary: {
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
        },
        dark: {
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
            secondary: {
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
            tertiary: {
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
        },
        contrast: {
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
            secondary: {
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
            tertiary: {
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
}
