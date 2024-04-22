import React from 'react';
import {
    ThemeColorDisplaySC, ThemeColorInfoHexSC, ThemeColorInfoNameSC, ThemeColorInfoSC,
    ThemeColorSC
} from "./theme-color.style";

export const ThemeColor = (
    { color, label } : { color : string, label : string }
) => {
    return (
        <ThemeColorSC>
            <ThemeColorDisplaySC color={ color }></ThemeColorDisplaySC>
            <ThemeColorInfoSC>
                <ThemeColorInfoNameSC>
                    { label }
                </ThemeColorInfoNameSC>
                <ThemeColorInfoHexSC>
                    { color }
                </ThemeColorInfoHexSC>
            </ThemeColorInfoSC>
        </ThemeColorSC>
    );
};

