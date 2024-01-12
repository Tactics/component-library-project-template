import {TypographyFontConfigI} from "../contracts/font";

export const Font = ({base, config} : {
    base: string,
    config: TypographyFontConfigI
}) : string => {

    if (config?.family && config?.fontSize && config?.lineHeight) {
        return config.fontSize + '/' + config.lineHeight + ' ' + config.family;
    }

    return base;
}