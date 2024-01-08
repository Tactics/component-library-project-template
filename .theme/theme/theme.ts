import {PartialThemeI, ThemeI} from "./contracts/theme";
import {Typography} from "../typography/typography";
import {ContrastColors} from "../colors/contrast-colors";

export const Theme = ({base, config} : {
    base: ThemeI
    config: PartialThemeI,
}) : ThemeI => {

    return {
        typography: Typography(
            {
                config : {
                    resources: config.typography?.resources ? config.typography.resources : [],
                    fonts: config.typography?.fonts ? config.typography.fonts : {},
                }
            }
        ),
        colors: ContrastColors(
            {
                base: base.colors,
                config: config.colors ? config.colors : {}
            }
        )
    }
}