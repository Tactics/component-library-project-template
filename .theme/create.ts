import {HexColor, PartialTheme, PartialThemeColors, Theme, ThemeColors} from "./theme";

interface createThemeParams {
    baseTheme : Theme,
    light?: Partial<PartialThemeColors> | undefined,
    dark?: Partial<PartialThemeColors> | undefined,
    contrast?: Partial<PartialThemeColors> | undefined,
}

export const CreateTheme = ({baseTheme, light, dark, contrast} : createThemeParams) : Theme => {

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

    const theme_light = buildColors(light || {}, baseTheme.light);
    const theme_dark = buildColors(dark || {}, baseTheme.dark);
    const theme_contrast = buildColors(contrast || {}, baseTheme.contrast);

    return {
        light: theme_light,
        dark: theme_dark,
        contrast: theme_contrast,
    }
}