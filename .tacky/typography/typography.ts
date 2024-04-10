import {TypographyFonts} from "./fonts/create";
import {TypographyConfigI, TypographyI} from "./contracts/typography";
import {TypographyResources} from "./resources/create";

export const Typography = ({base , config} : {
    base: TypographyI,
    config: TypographyConfigI,
}) : TypographyI => {

    return {
        resources: TypographyResources(
            {
                base: base.resources,
                config: config?.resources ?? []
            }
        ),
        fonts: TypographyFonts(
            {
                base: base.fonts,
                config: config?.fonts ? config.fonts : {}
            }
        )
    }
}
