import {ThemeI, ThemeVariantsI} from "../theme/contracts/theme";
import {Font} from "../typography/font/create";

export const baseThemeConfigPrimaryFont : string = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
export const baseThemeConfigAccentFont : string = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
export const baseThemeConfigSupportingFont : string = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const baseThemeConfigScaleXs : string = '0.75rem/1rem';
export const baseThemeConfigScaleSm : string = '0.875rem/1.25rem';
export const baseThemeConfigScaleMd : string = '1rem/1.5rem';
export const baseThemeConfigScaleLg : string = '1.125rem/1.75rem';
export const baseThemeConfigScaleXl : string = '1.25rem/1.75rem';
export const baseThemeConfigScale2Xl : string = '1.5rem/2rem';
export const baseThemeConfigScale3Xl : string = '1.875rem/2.25rem';
export const baseThemeConfigScale4Xl : string = '2.25rem/2.5rem';
export const baseThemeConfigScale5Xl : string = '3rem/1';
export const baseThemeConfigScale6Xl : string = '3.75rem/1';
export const baseThemeConfigScale7Xl : string = '4.5rem/1';
export const baseThemeConfigScale8Xl : string = '6rem/1';
export const baseThemeConfigScale9Xl : string = '8rem/1';

const baseThemeConfig : ThemeI = {
    alternate: [],
    typography: {
        resources: [],
        fonts: {
            primary: {
                xs: Font(
                    {
                        scale: baseThemeConfigScaleXs,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                sm: Font(
                    {
                        scale: baseThemeConfigScaleSm,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                md: Font(
                    {
                        scale: baseThemeConfigScaleMd,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                lg: Font(
                    {
                        scale: baseThemeConfigScaleLg,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                xl: Font(
                    {
                        scale: baseThemeConfigScaleXl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "2xl": Font(
                    {
                        scale: baseThemeConfigScale2Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "3xl": Font(
                    {
                        scale: baseThemeConfigScale3Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "4xl": Font(
                    {
                        scale: baseThemeConfigScale4Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "5xl": Font(
                    {
                        scale: baseThemeConfigScale5Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "6xl": Font(
                    {
                        scale: baseThemeConfigScale6Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "7xl": Font(
                    {
                        scale: baseThemeConfigScale7Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "8xl": Font(
                    {
                        scale: baseThemeConfigScale8Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
                "9xl": Font(
                    {
                        scale: baseThemeConfigScale9Xl,
                        family: baseThemeConfigPrimaryFont
                    }
                ),
            },
            accent: {
                xs: Font(
                    {
                        scale: baseThemeConfigScaleXs,
                        family: baseThemeConfigAccentFont
                    }
                ),
                sm: Font(
                    {
                        scale: baseThemeConfigScaleSm,
                        family: baseThemeConfigAccentFont
                    }
                ),
                md: Font(
                    {
                        scale: baseThemeConfigScaleMd,
                        family: baseThemeConfigAccentFont
                    }
                ),
                lg: Font(
                    {
                        scale: baseThemeConfigScaleLg,
                        family: baseThemeConfigAccentFont
                    }
                ),
                xl: Font(
                    {
                        scale: baseThemeConfigScaleXl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "2xl": Font(
                    {
                        scale: baseThemeConfigScale2Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "3xl": Font(
                    {
                        scale: baseThemeConfigScale3Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "4xl": Font(
                    {
                        scale: baseThemeConfigScale4Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "5xl": Font(
                    {
                        scale: baseThemeConfigScale5Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "6xl": Font(
                    {
                        scale: baseThemeConfigScale6Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "7xl": Font(
                    {
                        scale: baseThemeConfigScale7Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "8xl": Font(
                    {
                        scale: baseThemeConfigScale8Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
                "9xl": Font(
                    {
                        scale: baseThemeConfigScale9Xl,
                        family: baseThemeConfigAccentFont
                    }
                ),
            },
            supporting: {
                xs: Font(
                    {
                        scale: baseThemeConfigScaleXs,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                sm: Font(
                    {
                        scale: baseThemeConfigScaleSm,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                md: Font(
                    {
                        scale: baseThemeConfigScaleMd,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                lg: Font(
                    {
                        scale: baseThemeConfigScaleLg,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                xl: Font(
                    {
                        scale: baseThemeConfigScaleXl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "2xl": Font(
                    {
                        scale: baseThemeConfigScale2Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "3xl": Font(
                    {
                        scale: baseThemeConfigScale3Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "4xl": Font(
                    {
                        scale: baseThemeConfigScale4Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "5xl": Font(
                    {
                        scale: baseThemeConfigScale5Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "6xl": Font(
                    {
                        scale: baseThemeConfigScale6Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "7xl": Font(
                    {
                        scale: baseThemeConfigScale7Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "8xl": Font(
                    {
                        scale: baseThemeConfigScale8Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
                "9xl": Font(
                    {
                        scale: baseThemeConfigScale9Xl,
                        family: baseThemeConfigSupportingFont
                    }
                ),
            }
        },
    },
    colors: {
        danger: {
            tint_50: '#FFFFFF',
            tint_100: '#333333',
            tint_200: '#333333',
            tint_300: '#333333',
            tint_400: '#333333',
            tint_500: '#333333',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#FFFFFF',
            tint_900: '#FFFFFF',
            tint_950: '#FFFFFF'
        },
        warning: {
            tint_50: '#FFFFFF',
            tint_100: '#333333',
            tint_200: '#333333',
            tint_300: '#333333',
            tint_400: '#333333',
            tint_500: '#333333',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#FFFFFF',
            tint_900: '#FFFFFF',
            tint_950: '#FFFFFF'
        },
        success: {
            tint_50: '#FFFFFF',
            tint_100: '#333333',
            tint_200: '#333333',
            tint_300: '#333333',
            tint_400: '#333333',
            tint_500: '#333333',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#FFFFFF',
            tint_900: '#FFFFFF',
            tint_950: '#FFFFFF'
        },
        info: {
            tint_50: '#FFFFFF',
            tint_100: '#333333',
            tint_200: '#333333',
            tint_300: '#333333',
            tint_400: '#333333',
            tint_500: '#333333',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#FFFFFF',
            tint_900: '#FFFFFF',
            tint_950: '#FFFFFF'
        },
        neutrals: {
            tint_50: '#FFFFFF',
            tint_100: '#FFFFFF',
            tint_200: '#F5F7FA',
            tint_300: '#E5E8EB',
            tint_400: '#FFFFFF',
            tint_500: '#FFFFFF',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#9AA5B1',
            tint_900: '#515F6C',
            tint_950: '#515F6C',
        },
        primary: {
            tint_50: '#E0FCFF',
            tint_100: '#E0FCFF',
            tint_200: '#BEF8FD',
            tint_300: '#87EAF2',
            tint_400: '#54D1DB',
            tint_500: '#38BEC9',
            tint_600: '#2CB1BC',
            tint_700: '#14919B',
            tint_800: '#0E7C86',
            tint_900: '#0A6C74',
            tint_950: '#044E54'
        },
        accent: {
            tint_50: '#FFFFFF',
            tint_100: '#333333',
            tint_200: '#333333',
            tint_300: '#333333',
            tint_400: '#333333',
            tint_500: '#333333',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#FFFFFF',
            tint_900: '#FFFFFF',
            tint_950: '#FFFFFF'
        },
        supporting: {
            tint_50: '#FFFFFF',
            tint_100: '#333333',
            tint_200: '#333333',
            tint_300: '#333333',
            tint_400: '#333333',
            tint_500: '#333333',
            tint_600: '#FFFFFF',
            tint_700: '#FFFFFF',
            tint_800: '#FFFFFF',
            tint_900: '#FFFFFF',
            tint_950: '#FFFFFF'
        },
    }
}

export const BaseTheme : ThemeI = baseThemeConfig;


/*
• Font size
• Font weight
• Line height
• Color
• Margin
• Padding
• Width
• Height
• Box shadows
• Border radius
• Border width • Opacity
 */