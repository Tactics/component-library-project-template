import {ThemeBuilder} from "@tactics/tacky";
import config from "./../theme.config";
import {BaseTheme} from "@tactics/tacky/src/base/theme";

export const standardTheme = ThemeBuilder({
    base: BaseTheme,
    // @ts-ignore
    config: config.standard ?? {}
});


export const contrastTheme = ThemeBuilder({
    base: BaseTheme,
    // @ts-ignore
    config: config.contrast ?? {}
});

export const invertedTheme = ThemeBuilder({
    base: BaseTheme,
    // @ts-ignore
    config: config.inverted ?? {}
});