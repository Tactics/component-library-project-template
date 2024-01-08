import {ColorsI, PartialColorsI} from "./contracts/colors";
import {ColorVariant} from "./variant";

export const Colors = ({ base, config } : {
    base: ColorsI
    config: PartialColorsI,
}) : ColorsI => {
    return {
        main: ColorVariant(
            {
                base: base.main,
                config: config.main ? config.main : {}
            }
        ),
        secondary: ColorVariant(
            {
                base: base.secondary,
                config: config.secondary ? config.secondary : {}
            }
        ),
        tertiary: ColorVariant(
            {
                base: base.tertiary,
                config: config.tertiary ? config.tertiary : {}
            }
        )
    }
}