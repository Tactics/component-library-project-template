import {TypographyFonts} from "./fonts/create";
import {PartialTypographyI, TypographyI} from "./contracts/typography";

export const Typography = ({config} : {
    config: PartialTypographyI,
}) : TypographyI => {

    return {
        resources: config.resources ? config.resources : [],
        fonts: TypographyFonts(
            {
                config: config?.fonts ? config.fonts : {}
            }
        )
    }
}
