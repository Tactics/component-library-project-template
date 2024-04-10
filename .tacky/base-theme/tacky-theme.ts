import {Theme} from "../theme/theme";
import {BaseTheme} from "./base-theme";
import config from "../../tacky.config";

export const standard = Theme({
    base: BaseTheme,
    config: config.theme.standard ?? {}
});

export const contrast = Theme({
    base: standard,
    config: config.theme.contrast ?? {}
});

export const inverted = Theme({
    base: standard,
    config: config.theme.inverted ?? {}
});