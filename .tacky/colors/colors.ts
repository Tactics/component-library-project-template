import {ColorsConfigI, ColorsI} from "./contracts/colors";
import {ColorVariant} from "./variant";

export const Colors = ({ base, config } : {
    base: ColorsI
    config: ColorsConfigI,
}) : ColorsI => {
    return {
        danger: ColorVariant(
            {
                base: base.danger,
                config: config.danger ? config.danger : {}
            }
        ),
        warning: ColorVariant(
            {
                base: base.warning,
                config: config.warning ? config.warning : {}
            }
        ),
        success: ColorVariant(
            {
                base: base.success,
                config: config.success ? config.success : {}
            }
        ),
        info: ColorVariant(
            {
                base: base.info,
                config: config.info ? config.info : {}
            }
        ),
        neutrals: ColorVariant(
            {
                base: base.neutrals,
                config: config.neutrals ? config.neutrals : {}
            }
        ),
        primary: ColorVariant(
            {
                base: base.primary,
                config: config.primary ? config.primary : {}
            }
        ),
        accent: ColorVariant(
            {
                base: base.accent,
                config: config.accent ? config.accent : {}
            }
        ),
        supporting: ColorVariant(
            {
                base: base.supporting,
                config: config.supporting ? config.supporting : {}
            }
        )
    }
}