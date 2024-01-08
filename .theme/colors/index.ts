import {HexColor, ThemeColors, ThemeContrastColors} from "../contracts/theme";
import {ColorVariant} from "./variant";
import {ColorVariantI} from "./contracts/color-variant";

export const ColorVariant = ({ base, config } : {
    base: ColorVariantI
    config: Partial<ColorVariantI>,
}) : ColorVariantI => {



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

        const color_tertiary_regular = orDefault(
            themeColors,
            baseColors.tertiary.regular,
            ['tertiary', 'regular']
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


        const color_tertiary_tint4 = orDefault(
            themeColors,
            color_tertiary_regular,
            ['tertiary', 'tint4']
        );

        const color_tertiary_tint3 = orDefault(
            themeColors,
            color_tertiary_tint4,
            ['tertiary', 'tint3']
        );

        const color_tertiary_tint2 = orDefault(
            themeColors,
            color_tertiary_tint3,
            ['tertiary', 'tint2']
        );

        const color_tertiary_tint1 = orDefault(
            themeColors,
            color_tertiary_tint2,
            ['tertiary', 'tint1']
        );

        const color_tertiary_tint6 = orDefault(
            themeColors,
            color_tertiary_regular,
            ['tertiary', 'tint6']
        );

        const color_tertiary_tint7 = orDefault(
            themeColors,
            color_tertiary_tint6,
            ['tertiary', 'tint7']
        );

        const color_tertiary_tint8 = orDefault(
            themeColors,
            color_tertiary_tint7,
            ['tertiary', 'tint8']
        );

        const color_tertiary_tint9 = orDefault(
            themeColors,
            color_tertiary_tint8,
            ['tertiary', 'tint9']
        );


        return {
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
            tertiary: {
                tint_1: color_tertiary_tint1,
                tint_2: color_tertiary_tint2,
                tint_3: color_tertiary_tint3,
                tint_4: color_tertiary_tint4,
                regular: color_tertiary_regular,
                tint_6: color_tertiary_tint6,
                tint_7: color_tertiary_tint7,
                tint_8: color_tertiary_tint8,
                tint_9: color_tertiary_tint9,
            },
        }
    }

    const theme_light = buildColors(light || {}, baseTheme.colors.light);
    const theme_dark = buildColors(dark || {}, baseTheme.colors.dark);
    const theme_contrast = buildColors(contrast || {}, baseTheme.colors.contrast);

    return <ThemeContrastColors>{
        light: ColorVariant(
            {
                base: '',
                config: ''
            }
        ),
        dark: ColorVariant(
            {
                base: '',
                config: ''
            }
        ),
        contrast: ColorVariant(
            {
                base: '',
                config: ''
            }
        ),
    }
}