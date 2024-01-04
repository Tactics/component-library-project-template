export type HexColor = `#${string}`;

export interface ThemeColorVariant {
    tint_4 : HexColor
    regular : HexColor
    tint_6 : HexColor
}

export interface ThemeColors {
    main : ThemeColorVariant
    secondary : ThemeColorVariant
}

export interface PartialThemeColors {
    main : Partial<ThemeColorVariant>
    secondary : Partial<ThemeColorVariant>
}

export interface Theme {
    light: ThemeColors,
    dark: ThemeColors,
    contrast: ThemeColors
}

export interface PartialTheme {
    light: Partial<PartialThemeColors>,
    dark: Partial<PartialThemeColors>,
    contrast: Partial<PartialThemeColors>
}

