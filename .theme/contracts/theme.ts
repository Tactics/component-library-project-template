export type HexColor = `#${string}`;
export type RemSize = `${string}rem`;
export type EmSize = `${string}em`;
export type PxSize = `${string}px`;

export interface ThemeColorVariant {
    tint_1 : HexColor
    tint_2 : HexColor
    tint_3 : HexColor
    tint_4 : HexColor
    regular : HexColor
    tint_6 : HexColor
    tint_7 : HexColor
    tint_8 : HexColor
    tint_9 : HexColor
}

export interface ThemeColors {
    main : ThemeColorVariant
    secondary : ThemeColorVariant
}

export interface ThemeContrastColors {
    light: ThemeColors,
    dark: ThemeColors,
    contrast: ThemeColors
}

export interface Theme {
    resources: ThemeResourcesList
    colors: ThemeContrastColors
    typography: ThemeFonts
}

export interface ThemeFonts {
    main : ThemeFontVariant
    secondary : ThemeFontVariant
}

export interface ThemeFontVariant {
    xs : string;
    sm : string;
    base : string;
    lg : string;
    xl : string;
    "2xl" : string;
    "3xl" : string;
    "4xl" : string;
    "5xl" : string;
    "6xl" : string;
    "7xl" : string;
    "8xl" : string;
    "9xl" : string;
}

export interface ThemeFonts {
    main : ThemeFontVariant
    secondary : ThemeFontVariant
    tertiary: ThemeFontVariant
}

export interface ThemeResourcesList extends Array<string> {}

export interface PartialThemeTypography {
    fonts : Partial<PartialThemeFonts>
    sizes : Partial<PartialThemeSizes>
}

export interface PartialThemeFonts {
    main : string | undefined
    secondary : string | undefined
    tertiary: string | undefined
}

export interface PartialThemeSizes {
    "xs": Partial<PartialThemeSizesInfo>,
    "sm" : Partial<PartialThemeSizesInfo>,
    "base": Partial<PartialThemeSizesInfo>,
    "lg": Partial<PartialThemeSizesInfo>,
    "xl": Partial<PartialThemeSizesInfo>,
    "2xl": Partial<PartialThemeSizesInfo>,
    "3xl": Partial<PartialThemeSizesInfo>,
    "4xl": Partial<PartialThemeSizesInfo>,
    "5xl": Partial<PartialThemeSizesInfo>,
    "6xl": Partial<PartialThemeSizesInfo>,
    "7xl": Partial<PartialThemeSizesInfo>,
    "8xl": Partial<PartialThemeSizesInfo>,
    "9xl": Partial<PartialThemeSizesInfo>,
}

export interface PartialThemeSizesInfo {
    fontSize: RemSize|EmSize|PxSize,
    lineHeight: RemSize|EmSize|PxSize|number,
}


export interface PartialThemeFontVariant {
    xs : Partial<string>;
    sm : Partial<string>;
    base : Partial<string>;
    lg : Partial<string>;
    xl : Partial<string>;
    "2xl" : Partial<string>;
    "3xl" : Partial<string>;
    "4xl" : Partial<string>;
    "5xl" : Partial<string>;
    "6xl" : Partial<string>;
    "7xl" : Partial<string>;
    "8xl" : Partial<string>;
    "9xl" : Partial<string>;
}

export interface PartialTheme {
    colors: Partial<PartialContrastColors>,
    typography: Partial<PartialThemeTypography>,
}

export interface PartialContrastColors {
    light: Partial<PartialThemeColors>,
    dark: Partial<PartialThemeColors>,
    contrast: Partial<PartialThemeColors>
}

export interface PartialThemeColors {
    main : Partial<ThemeColorVariant>
    secondary : Partial<ThemeColorVariant>
}


