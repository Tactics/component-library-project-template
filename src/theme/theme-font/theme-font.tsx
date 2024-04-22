import React from 'react';
import {
    ThemeFontDisplaySC
} from "./theme-font.style";

export const ThemeFont = (
    { font, label } : { font : string, label : string }
) => {
    return (
        <ThemeFontDisplaySC font={font}>
            { label }
        </ThemeFontDisplaySC>
    );
};

