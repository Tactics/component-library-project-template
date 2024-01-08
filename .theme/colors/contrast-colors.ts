import {ContrastColorsI, PartialContrastColorsI} from "./contracts/contrast-color";
import {Colors} from "./colors";

export const ContrastColors = ({ base, config } : {
    base: ContrastColorsI
    config: PartialContrastColorsI,
}) : ContrastColorsI => {

    return {
        light: Colors({
            base: base.light,
            config: config.light ? config.light : {}
        }),
        dark: Colors({
            base: base.dark,
            config: config.dark ? config.dark : {}
        }),
        contrast: Colors({
            base: base.contrast,
            config: config.contrast ? config.contrast : {}
        }),
    }
}