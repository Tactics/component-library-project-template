import React from 'react';
import {
    ThemeColorDisplaySC, ThemeColorInfoHexSC, ThemeColorInfoNameSC, ThemeColorInfoSC,
    ThemeColorSC
} from "./theme-color.style";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";

export const ThemeColor = (
    { color, label } : { color : string, label : string }
) => {

    const typography = useThemeFonts();

    return (
        <ThemeColorSC>
            <ThemeColorDisplaySC color={ color }></ThemeColorDisplaySC>
            <ThemeColorInfoSC>
                <ThemeColorInfoNameSC font={typography.primary.sm}>
                    { label }
                </ThemeColorInfoNameSC>
                <ThemeColorInfoHexSC font={typography.primary.xs}>
                    { color }
                </ThemeColorInfoHexSC>
            </ThemeColorInfoSC>
        </ThemeColorSC>
    );
};

