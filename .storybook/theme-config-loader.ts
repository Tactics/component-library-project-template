import {ThemeBuilder} from "@tactics/tacky";
// @ts-ignore
import config from "./../theme.config";

export const standardTheme = ThemeBuilder({
    // @ts-ignore
    config: config.standard ?? {}
});

export const contrastTheme = ThemeBuilder({
    // @ts-ignore
    config: config.contrast ?? {}
});

export const invertedTheme = ThemeBuilder({
    // @ts-ignore
    config: config.inverted ?? {}
});