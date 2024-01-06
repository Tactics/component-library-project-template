import {
    HexColor,
    PartialThemeColors,
    PartialThemeTypography,
    Theme,
    ThemeColors,
    ThemeContrastColors,
    ThemeFonts, ThemeResourcesList,
} from "./contracts/theme";

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
    resources: ThemeResourcesList,
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

        const color_main_regular = orDefault(
            themeColors,
            baseColors.main.regular,
            ['main', 'regular']
        );

        const color_secondary_regular = orDefault(
            themeColors,
            baseColors.secondary.regular,
            ['secondary', 'regular']
        );

        const color_main_tint4 = orDefault(
            themeColors,
            color_main_regular,
            ['main', 'tint4']
        );

        const color_main_tint3 = orDefault(
            themeColors,
            color_main_tint4,
            ['main', 'tint3']
        );

        const color_main_tint2 = orDefault(
            themeColors,
            color_main_tint3,
            ['main', 'tint2']
        );

        const color_main_tint1 = orDefault(
            themeColors,
            color_main_tint2,
            ['main', 'tint1']
        );

        const color_main_tint6 = orDefault(
            themeColors,
            color_main_regular,
            ['main', 'tint6']
        );

        const color_main_tint7 = orDefault(
            themeColors,
            color_main_tint6,
            ['main', 'tint7']
        );

        const color_main_tint8 = orDefault(
            themeColors,
            color_main_tint7,
            ['main', 'tint8']
        );

        const color_main_tint9 = orDefault(
            themeColors,
            color_main_tint8,
            ['main', 'tint9']
        );

        const color_secondary_tint4 = orDefault(
            themeColors,
            color_secondary_regular,
            ['secondary', 'tint4']
        );

        const color_secondary_tint3 = orDefault(
            themeColors,
            color_secondary_tint4,
            ['secondary', 'tint3']
        );

        const color_secondary_tint2 = orDefault(
            themeColors,
            color_secondary_tint3,
            ['secondary', 'tint2']
        );

        const color_secondary_tint1 = orDefault(
            themeColors,
            color_secondary_tint2,
            ['secondary', 'tint1']
        );

        const color_secondary_tint6 = orDefault(
            themeColors,
            color_secondary_regular,
            ['secondary', 'tint6']
        );

        const color_secondary_tint7 = orDefault(
            themeColors,
            color_secondary_tint6,
            ['secondary', 'tint7']
        );

        const color_secondary_tint8 = orDefault(
            themeColors,
            color_secondary_tint7,
            ['secondary', 'tint8']
        );

        const color_secondary_tint9 = orDefault(
            themeColors,
            color_secondary_tint8,
            ['secondary', 'tint9']
        );


        return {
            main: {
                tint_1: color_main_tint1,
                tint_2: color_main_tint2,
                tint_3: color_main_tint3,
                tint_4: color_main_tint4,
                regular: color_main_regular,
                tint_6: color_main_tint6,
                tint_7: color_main_tint7,
                tint_8: color_main_tint8,
                tint_9: color_main_tint9,
            },
            secondary: {
                tint_1: color_secondary_tint1,
                tint_2: color_secondary_tint2,
                tint_3: color_secondary_tint3,
                tint_4: color_secondary_tint4,
                regular: color_secondary_regular,
                tint_6: color_secondary_tint6,
                tint_7: color_secondary_tint7,
                tint_8: color_secondary_tint8,
                tint_9: color_secondary_tint9,
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

export const CreateTheme = ({resources, colors, fonts} : createThemeParams) : Theme => {
    return  {
        resources: resources,
        typography: fonts,
        colors: colors
    }
}