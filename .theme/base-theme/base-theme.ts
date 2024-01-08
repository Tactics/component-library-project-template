import {BaseThemeDefaults} from "./defaults";
import {ThemeI} from "../theme/contracts/theme";
import {Font} from "../typography/font/create";

export const BaseTheme : ThemeI = {
    typography: {
        resources: [],
        fonts: {
            main: {
                xs: Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"].xs,
                        lineHeight: BaseThemeDefaults["line-height"].xs
                    }
                ),
                sm: Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"].sm,
                        lineHeight: BaseThemeDefaults["line-height"].sm
                    }
                ),
                base: Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"].base,
                        lineHeight: BaseThemeDefaults["line-height"].base
                    }
                ),
                lg: Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"].lg,
                        lineHeight: BaseThemeDefaults["line-height"].lg
                    }
                ),
                xl: Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"].xl,
                        lineHeight: BaseThemeDefaults["line-height"].xl
                    }
                ),
                "2xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["2xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["2xl"]
                    }
                ),
                "3xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["3xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["3xl"]
                    }
                ),
                "4xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["4xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["4xl"]
                    }
                ),
                "5xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["5xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["5xl"]
                    }
                ),
                "6xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["6xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["6xl"]
                    }
                ),
                "7xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["7xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["7xl"]
                    }
                ),
                "8xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["8xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["8xl"]
                    }
                ),
                "9xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].main,
                        fontSize: BaseThemeDefaults["font-size"]["9xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["9xl"]
                    }
                ),
             },
            secondary: {
                xs: Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"].xs,
                        lineHeight: BaseThemeDefaults["line-height"].xs
                    }
                ),
                sm: Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"].sm,
                        lineHeight: BaseThemeDefaults["line-height"].sm
                    }
                ),
                base: Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"].base,
                        lineHeight: BaseThemeDefaults["line-height"].base
                    }
                ),
                lg: Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"].lg,
                        lineHeight: BaseThemeDefaults["line-height"].lg
                    }
                ),
                xl: Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"].xl,
                        lineHeight: BaseThemeDefaults["line-height"].xl
                    }
                ),
                "2xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["2xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["2xl"]
                    }
                ),
                "3xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["3xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["3xl"]
                    }
                ),
                "4xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["4xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["4xl"]
                    }
                ),
                "5xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["5xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["5xl"]
                    }
                ),
                "6xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["6xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["6xl"]
                    }
                ),
                "7xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["7xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["7xl"]
                    }
                ),
                "8xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["8xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["8xl"]
                    }
                ),
                "9xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].secondary,
                        fontSize: BaseThemeDefaults["font-size"]["9xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["9xl"]
                    }
                ),
            },
            tertiary: {
                xs: Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"].xs,
                        lineHeight: BaseThemeDefaults["line-height"].xs
                    }
                ),
                sm: Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"].sm,
                        lineHeight: BaseThemeDefaults["line-height"].sm
                    }
                ),
                base: Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"].base,
                        lineHeight: BaseThemeDefaults["line-height"].base
                    }
                ),
                lg: Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"].lg,
                        lineHeight: BaseThemeDefaults["line-height"].lg
                    }
                ),
                xl: Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"].xl,
                        lineHeight: BaseThemeDefaults["line-height"].xl
                    }
                ),
                "2xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["2xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["2xl"]
                    }
                ),
                "3xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["3xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["3xl"]
                    }
                ),
                "4xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["4xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["4xl"]
                    }
                ),
                "5xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["5xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["5xl"]
                    }
                ),
                "6xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["6xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["6xl"]
                    }
                ),
                "7xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["7xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["7xl"]
                    }
                ),
                "8xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["8xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["8xl"]
                    }
                ),
                "9xl": Font(
                    {
                        family: BaseThemeDefaults["font-family"].tertiary,
                        fontSize: BaseThemeDefaults["font-size"]["9xl"],
                        lineHeight: BaseThemeDefaults["line-height"]["9xl"]
                    }
                ),
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

