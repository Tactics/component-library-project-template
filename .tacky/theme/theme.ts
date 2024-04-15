import {ThemeConfigI, ThemeI} from "./contracts/theme";
import { Typography } from "../typography/typography";
import { Alternate } from "../alternate/alternate";
import { Colors } from "../colors/colors";
import {baseSpacing} from "../spacing/base-spacing";
import {baseOpacity} from "../opacity/base-opacity";

export const Theme = ({base, config} : {
    base: ThemeI
    config: ThemeConfigI,
}) : ThemeI => {

    return {
        alternate: config?.alternate ?
            Alternate(
            {
                base: base.alternate,
                config: config?.alternate ? config.alternate : []
            }
        ) : base.alternate,
        typography: config?.typography ?
            Typography(
            {
                base: base.typography,
                config : {
                    resources: config.typography?.resources ? config.typography.resources : [],
                    fonts: config.typography?.fonts ? config.typography.fonts : {},
                }
            }
        ) : base.typography,
        colors: config?.colors ?
            Colors(
            {
                base: base.colors,
                config: config.colors ? config.colors : {}
            }
        ) : base.colors,
        tools: {
            spacing: baseSpacing,
            opacity: baseOpacity
        }
    }
}