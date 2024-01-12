import {ColorsConfigI, ColorsI} from "./contracts/colors";
import {ColorVariant} from "./variant";

export const Colors = ({ base, config } : {
    base: ColorsI
    config: ColorsConfigI,
}) : ColorsI => {
    return {
        main: ColorVariant(
            {
                base: base.main,
                config: config.main ? config.main : {}
            }
        ),
        second: ColorVariant(
            {
                base: base.second,
                config: config.second ? config.second : {}
            }
        ),
        third: ColorVariant(
            {
                base: base.third,
                config: config.third ? config.third : {}
            }
        )
    }
}