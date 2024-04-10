import {ThemeConfigI} from "./theme/contracts/theme";

interface TackyConfigThemeI {
    standard?: ThemeConfigI,
    inverted?: ThemeConfigI
    contrast?: ThemeConfigI
}

export interface TackyConfigI {
    label: string,
    project: string,
    author: string,
    theme: TackyConfigThemeI
}

