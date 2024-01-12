import {ThemeConfigI, ThemeI} from "./contracts/theme";
import { Typography } from "../typography/typography";
import { Alternate } from "../alternate/alternate";
import { Colors } from "../colors/colors";

export const Theme = ({base, config} : {
    base: ThemeI
    config: ThemeConfigI,
}) : ThemeI => {

    return {
        alternate: Alternate(
            {
                base: base.alternate,
                config: config?.alternate ? config.alternate : []
            }
        ),
        typography: Typography(
            {
                base: base.typography,
                config : {
                    resources: config.typography?.resources ? config.typography.resources : [],
                    fonts: config.typography?.fonts ? config.typography.fonts : {},
                }
            }
        ),
        colors: Colors(
            {
                base: base.colors,
                config: config.colors ? config.colors : {}
            }
        )
    }
}