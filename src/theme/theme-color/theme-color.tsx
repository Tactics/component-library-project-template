import React from 'react';
import {
    ThemeColorDisplaySC, ThemeColorInfoHexSC, ThemeColorInfoNameSC, ThemeColorInfoSC,
    ThemeColorSC
} from "./theme-color.style";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";

export const ThemeColor = (
    { color, label } : { color : string, label : string }
) => {

    const colors = useThemeColor();
    const typography = useThemeFonts();

    return (
        <ThemeColorSC>
            <ThemeColorDisplaySC
                color={ color }
            >
            </ThemeColorDisplaySC>
            <ThemeColorInfoSC>
                <ThemeColorInfoNameSC
                    font={ typography.primary.sm }
                    color={ colors.neutrals.tint_800 }
                >
                    { label }
                </ThemeColorInfoNameSC>
                <ThemeColorInfoHexSC
                    font={ typography.primary.xs }
                    color={ colors.neutrals.tint_800 }
                >
                    { color }
                </ThemeColorInfoHexSC>
            </ThemeColorInfoSC>
        </ThemeColorSC>
    );
};

