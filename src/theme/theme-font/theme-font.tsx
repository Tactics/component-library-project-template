import React from 'react';
import {
    ThemeFontDisplaySC
} from "./theme-font.style";

export const ThemeFont = (
    { font, label, size } : { font : string, label : string, size: string }
) => {
    return (
        <>
            {size}
            <ThemeFontDisplaySC font={font}>
                { label }
            </ThemeFontDisplaySC>
        </>
    );
};

