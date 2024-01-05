import {
    EmSize,
    HexColor,
    PartialThemeColors,
    PartialThemeFonts, PartialThemeTypography, PxSize, RemSize,
    Theme,
    ThemeColors,
    ThemeContrastColors,
    ThemeFonts, ThemeFontVariant
} from "./contracts/theme";
import {TextType} from "./enum/text-type";
import {create} from "@storybook/theming/create";
import {
    base_font_size_2xl,
    base_font_size_3xl,
    base_font_size_4xl,
    base_font_size_5xl,
    base_font_size_6xl,
    base_font_size_7xl, base_font_size_8xl, base_font_size_9xl,
    base_font_size_base,
    base_font_size_lg,
    base_font_size_xl,
    base_font_size_xs,
    base_line_height_2xl,
    base_line_height_3xl,
    base_line_height_4xl,
    base_line_height_5xl,
    base_line_height_6xl, base_line_height_7xl, base_line_height_8xl,
    base_line_height_9xl,
    base_line_height_base,
    base_line_height_lg,
    base_line_height_xl,
    base_line_height_xs,
    base_main_font, base_secondary_font, base_tertiary_font
} from "./base-theme";

interface createThemeColorsParams {
    baseTheme : Theme,
    light?: Partial<PartialThemeColors> | undefined,
    dark?: Partial<PartialThemeColors> | undefined,
    contrast?: Partial<PartialThemeColors> | undefined,
}

interface createThemeFontsParams {
    typography?: Partial<PartialThemeTypography> | undefined,
}

interface createFontParams {
    family: string,
    fontSize: string,
    lineHeight: string | number,
}

interface createThemeParams {
    colors : ThemeContrastColors,
    fonts: ThemeFonts
}

export const createFont = ({family, fontSize, lineHeight} : createFontParams) : string => {
    return fontSize + '/' + lineHeight + ' ' + family;
}

export const CreateThemeFonts = ({typography} : createThemeFontsParams) : ThemeFonts => {
    return {
        main: {
            xs : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.xs?.fontSize ? typography?.sizes?.xs?.fontSize : base_font_size_xs,
                    lineHeight: typography?.sizes?.xs?.lineHeight ? typography?.sizes?.xs?.lineHeight : base_line_height_xs,
                }
            ),
            sm : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.sm?.fontSize ? typography?.sizes?.sm?.fontSize : base_font_size_xs,
                    lineHeight: typography?.sizes?.sm?.lineHeight ? typography?.sizes?.sm?.lineHeight : base_line_height_xs,
                }
            ),
            base : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.base?.fontSize ? typography?.sizes?.base?.fontSize : base_font_size_base,
                    lineHeight: typography?.sizes?.base?.lineHeight ? typography?.sizes?.base?.lineHeight : base_line_height_base,
                }
            ),
            lg : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.lg?.fontSize ? typography?.sizes?.lg?.fontSize : base_font_size_lg,
                    lineHeight: typography?.sizes?.lg?.lineHeight ? typography?.sizes?.lg?.lineHeight : base_line_height_lg,
                }
            ),
            xl : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.xl?.fontSize ? typography?.sizes?.xl?.fontSize : base_font_size_xl,
                    lineHeight: typography?.sizes?.xl?.lineHeight ? typography?.sizes?.xl?.lineHeight : base_line_height_xl,
                }
            ),
            "2xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["2xl"]?.fontSize ? typography?.sizes?.["2xl"]?.fontSize : base_font_size_2xl,
                    lineHeight: typography?.sizes?.["2xl"]?.lineHeight ? typography?.sizes?.["2xl"]?.lineHeight : base_line_height_2xl,
                }
            ),
            "3xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["3xl"]?.fontSize ? typography?.sizes?.["3xl"]?.fontSize : base_font_size_3xl,
                    lineHeight: typography?.sizes?.["3xl"]?.lineHeight ? typography?.sizes?.["3xl"]?.lineHeight : base_line_height_3xl,
                }
            ),
            "4xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["4xl"]?.fontSize ? typography?.sizes?.["4xl"]?.fontSize : base_font_size_4xl,
                    lineHeight: typography?.sizes?.["4xl"]?.lineHeight ? typography?.sizes?.["4xl"]?.lineHeight : base_line_height_4xl,
                }
            ),
            "5xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["5xl"]?.fontSize ? typography?.sizes?.["5xl"]?.fontSize : base_font_size_5xl,
                    lineHeight: typography?.sizes?.["5xl"]?.lineHeight ? typography?.sizes?.["5xl"]?.lineHeight : base_line_height_5xl,
                }
            ),
            "6xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["6xl"]?.fontSize ? typography?.sizes?.["6xl"]?.fontSize : base_font_size_6xl,
                    lineHeight: typography?.sizes?.["6xl"]?.lineHeight ? typography?.sizes?.["6xl"]?.lineHeight : base_line_height_6xl,
                }
            ),
            "7xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["7xl"]?.fontSize ? typography?.sizes?.["7xl"]?.fontSize : base_font_size_7xl,
                    lineHeight: typography?.sizes?.["7xl"]?.lineHeight ? typography?.sizes?.["7xl"]?.lineHeight : base_line_height_7xl,
                }
            ),
            "8xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["8xl"]?.fontSize ? typography?.sizes?.["8xl"]?.fontSize : base_font_size_8xl,
                    lineHeight: typography?.sizes?.["8xl"]?.lineHeight ? typography?.sizes?.["8xl"]?.lineHeight : base_line_height_8xl,
                }
            ),
            "9xl" : createFont(
                {
                    family: typography?.fonts?.main ? typography?.fonts?.main : base_main_font,
                    fontSize: typography?.sizes?.["9xl"]?.fontSize ? typography?.sizes?.["9xl"]?.fontSize : base_font_size_9xl,
                    lineHeight: typography?.sizes?.["9xl"]?.lineHeight ? typography?.sizes?.["9xl"]?.lineHeight : base_line_height_9xl,
                }
            ),
        },
        secondary: {
            xs : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.xs?.fontSize ? typography?.sizes?.xs?.fontSize : base_font_size_xs,
                    lineHeight: typography?.sizes?.xs?.lineHeight ? typography?.sizes?.xs?.lineHeight : base_line_height_xs,
                }
            ),
            sm : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.sm?.fontSize ? typography?.sizes?.sm?.fontSize : base_font_size_xs,
                    lineHeight: typography?.sizes?.sm?.lineHeight ? typography?.sizes?.sm?.lineHeight : base_line_height_xs,
                }
            ),
            base : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.base?.fontSize ? typography?.sizes?.base?.fontSize : base_font_size_base,
                    lineHeight: typography?.sizes?.base?.lineHeight ? typography?.sizes?.base?.lineHeight : base_line_height_base,
                }
            ),
            lg : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.lg?.fontSize ? typography?.sizes?.lg?.fontSize : base_font_size_lg,
                    lineHeight: typography?.sizes?.lg?.lineHeight ? typography?.sizes?.lg?.lineHeight : base_line_height_lg,
                }
            ),
            xl : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.xl?.fontSize ? typography?.sizes?.xl?.fontSize : base_font_size_xl,
                    lineHeight: typography?.sizes?.xl?.lineHeight ? typography?.sizes?.xl?.lineHeight : base_line_height_xl,
                }
            ),
            "2xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["2xl"]?.fontSize ? typography?.sizes?.["2xl"]?.fontSize : base_font_size_2xl,
                    lineHeight: typography?.sizes?.["2xl"]?.lineHeight ? typography?.sizes?.["2xl"]?.lineHeight : base_line_height_2xl,
                }
            ),
            "3xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["3xl"]?.fontSize ? typography?.sizes?.["3xl"]?.fontSize : base_font_size_3xl,
                    lineHeight: typography?.sizes?.["3xl"]?.lineHeight ? typography?.sizes?.["3xl"]?.lineHeight : base_line_height_3xl,
                }
            ),
            "4xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["4xl"]?.fontSize ? typography?.sizes?.["4xl"]?.fontSize : base_font_size_4xl,
                    lineHeight: typography?.sizes?.["4xl"]?.lineHeight ? typography?.sizes?.["4xl"]?.lineHeight : base_line_height_4xl,
                }
            ),
            "5xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["5xl"]?.fontSize ? typography?.sizes?.["5xl"]?.fontSize : base_font_size_5xl,
                    lineHeight: typography?.sizes?.["5xl"]?.lineHeight ? typography?.sizes?.["5xl"]?.lineHeight : base_line_height_5xl,
                }
            ),
            "6xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["6xl"]?.fontSize ? typography?.sizes?.["6xl"]?.fontSize : base_font_size_6xl,
                    lineHeight: typography?.sizes?.["6xl"]?.lineHeight ? typography?.sizes?.["6xl"]?.lineHeight : base_line_height_6xl,
                }
            ),
            "7xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["7xl"]?.fontSize ? typography?.sizes?.["7xl"]?.fontSize : base_font_size_7xl,
                    lineHeight: typography?.sizes?.["7xl"]?.lineHeight ? typography?.sizes?.["7xl"]?.lineHeight : base_line_height_7xl,
                }
            ),
            "8xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["8xl"]?.fontSize ? typography?.sizes?.["8xl"]?.fontSize : base_font_size_8xl,
                    lineHeight: typography?.sizes?.["8xl"]?.lineHeight ? typography?.sizes?.["8xl"]?.lineHeight : base_line_height_8xl,
                }
            ),
            "9xl" : createFont(
                {
                    family: typography?.fonts?.secondary ? typography?.fonts?.secondary : base_secondary_font,
                    fontSize: typography?.sizes?.["9xl"]?.fontSize ? typography?.sizes?.["9xl"]?.fontSize : base_font_size_9xl,
                    lineHeight: typography?.sizes?.["9xl"]?.lineHeight ? typography?.sizes?.["9xl"]?.lineHeight : base_line_height_9xl,
                }
            ),
        },
        tertiary: {
            xs : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.xs?.fontSize ? typography?.sizes?.xs?.fontSize : base_font_size_xs,
                    lineHeight: typography?.sizes?.xs?.lineHeight ? typography?.sizes?.xs?.lineHeight : base_line_height_xs,
                }
            ),
            sm : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.sm?.fontSize ? typography?.sizes?.sm?.fontSize : base_font_size_xs,
                    lineHeight: typography?.sizes?.sm?.lineHeight ? typography?.sizes?.sm?.lineHeight : base_line_height_xs,
                }
            ),
            base : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.base?.fontSize ? typography?.sizes?.base?.fontSize : base_font_size_base,
                    lineHeight: typography?.sizes?.base?.lineHeight ? typography?.sizes?.base?.lineHeight : base_line_height_base,
                }
            ),
            lg : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.lg?.fontSize ? typography?.sizes?.lg?.fontSize : base_font_size_lg,
                    lineHeight: typography?.sizes?.lg?.lineHeight ? typography?.sizes?.lg?.lineHeight : base_line_height_lg,
                }
            ),
            xl : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.xl?.fontSize ? typography?.sizes?.xl?.fontSize : base_font_size_xl,
                    lineHeight: typography?.sizes?.xl?.lineHeight ? typography?.sizes?.xl?.lineHeight : base_line_height_xl,
                }
            ),
            "2xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["2xl"]?.fontSize ? typography?.sizes?.["2xl"]?.fontSize : base_font_size_2xl,
                    lineHeight: typography?.sizes?.["2xl"]?.lineHeight ? typography?.sizes?.["2xl"]?.lineHeight : base_line_height_2xl,
                }
            ),
            "3xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["3xl"]?.fontSize ? typography?.sizes?.["3xl"]?.fontSize : base_font_size_3xl,
                    lineHeight: typography?.sizes?.["3xl"]?.lineHeight ? typography?.sizes?.["3xl"]?.lineHeight : base_line_height_3xl,
                }
            ),
            "4xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["4xl"]?.fontSize ? typography?.sizes?.["4xl"]?.fontSize : base_font_size_4xl,
                    lineHeight: typography?.sizes?.["4xl"]?.lineHeight ? typography?.sizes?.["4xl"]?.lineHeight : base_line_height_4xl,
                }
            ),
            "5xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["5xl"]?.fontSize ? typography?.sizes?.["5xl"]?.fontSize : base_font_size_5xl,
                    lineHeight: typography?.sizes?.["5xl"]?.lineHeight ? typography?.sizes?.["5xl"]?.lineHeight : base_line_height_5xl,
                }
            ),
            "6xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["6xl"]?.fontSize ? typography?.sizes?.["6xl"]?.fontSize : base_font_size_6xl,
                    lineHeight: typography?.sizes?.["6xl"]?.lineHeight ? typography?.sizes?.["6xl"]?.lineHeight : base_line_height_6xl,
                }
            ),
            "7xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["7xl"]?.fontSize ? typography?.sizes?.["7xl"]?.fontSize : base_font_size_7xl,
                    lineHeight: typography?.sizes?.["7xl"]?.lineHeight ? typography?.sizes?.["7xl"]?.lineHeight : base_line_height_7xl,
                }
            ),
            "8xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["8xl"]?.fontSize ? typography?.sizes?.["8xl"]?.fontSize : base_font_size_8xl,
                    lineHeight: typography?.sizes?.["8xl"]?.lineHeight ? typography?.sizes?.["8xl"]?.lineHeight : base_line_height_8xl,
                }
            ),
            "9xl" : createFont(
                {
                    family: typography?.fonts?.tertiary ? typography?.fonts?.tertiary : base_tertiary_font,
                    fontSize: typography?.sizes?.["9xl"]?.fontSize ? typography?.sizes?.["9xl"]?.fontSize : base_font_size_9xl,
                    lineHeight: typography?.sizes?.["9xl"]?.lineHeight ? typography?.sizes?.["9xl"]?.lineHeight : base_line_height_9xl,
                }
            ),
        }
    }
}

export const CreateThemeColors = ({baseTheme, light, dark, contrast} : createThemeColorsParams) : ThemeContrastColors => {

    function orDefault(json: any, standard: HexColor, keys: string[]): any {
        let currentValue = json;

        for (const key of keys) {
            // Check if the current value is null or undefined, and fallback to the standard value
            currentValue = currentValue?.[key] ?? standard;

            // If the current value is null or undefined, break the loop
            if (currentValue === null || currentValue === undefined) {
                break;
            }
        }

        return currentValue;
    }

    function buildColors(themeColors : object, baseColors : ThemeColors) {

        const color_main_tint5 = orDefault(
            themeColors,
            baseColors.main.regular,
            ['main', 'regular']
        );

        const color_secondary_tint5 = orDefault(
            themeColors,
            baseColors.secondary.regular,
            ['secondary', 'regular']
        );


        return {
            main: {
                regular: color_main_tint5,
                tint_4: orDefault(
                    themeColors,
                    color_main_tint5,
                    ['main', 'tint_4']
                ),
                tint_6: orDefault(
                    themeColors,
                    color_main_tint5,
                    ['main', 'tint_6']
                ),
            },
            secondary: {
                regular: color_secondary_tint5,
                tint_4: orDefault(
                    themeColors,
                    color_secondary_tint5,
                    ['main', 'tint_4']
                ),
                tint_6: orDefault(
                    themeColors,
                    color_secondary_tint5,
                    ['main', 'tint_6']
                ),
            },
        }
    }

    const theme_light = buildColors(light || {}, baseTheme.colors.light);
    const theme_dark = buildColors(dark || {}, baseTheme.colors.dark);
    const theme_contrast = buildColors(contrast || {}, baseTheme.colors.contrast);

    return {
        light: theme_light,
        dark: theme_dark,
        contrast: theme_contrast,
    }
}

export const CreateTheme = ({colors, fonts} : createThemeParams) : Theme => {
    return  {
        typography: fonts,
        colors: colors
    }
}