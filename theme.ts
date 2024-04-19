import {ThemeBuilder} from "@tactics/tacky";
import config from "./theme.config";
import {BaseTheme} from "@tactics/tacky/src/base/theme";

export const standard = ThemeBuilder({
    base: BaseTheme,
    config: config.standard ?? {}
});

export const contrast = ThemeBuilder({
    base: BaseTheme,
    config: config.contrast ?? {}
});

export const inverted = ThemeBuilder({
    base: BaseTheme,
    config: config.inverted ?? {}
});