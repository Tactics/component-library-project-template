import { ThemeVariantsI } from "./contracts/theme";
import { Theme } from "./theme";
import { ThemeVariantConfigI } from "./contracts/theme-config";

export const ThemeVariant = ({base, config} : {
    base: ThemeVariantsI
    config: ThemeVariantConfigI,
}) : ThemeVariantsI => {

    const standardTheme = Theme({
        base: base.standard,
        config: config?.standard ? config.standard : {}
    });

    const invertedTheme = Theme({
        base: standardTheme,
        config: config?.inverted ? config.inverted : {}
    });

    const highContrastTheme = Theme({
        base: standardTheme,
        config: config?.contrast ? config.contrast : {}
    });

    return {
        standard: standardTheme,
        inverted: invertedTheme,
        contrast: highContrastTheme
    }
}