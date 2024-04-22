import React from 'react';
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";
import {ThemeColorVariant} from "./../theme-color-group/theme-color-group";

export const ThemeColors = () => {
    const colors = useThemeColor();

    return (
        <>
            <ThemeColorVariant colors={colors.neutrals}/>
            <ThemeColorVariant colors={colors.danger}/>
            <ThemeColorVariant colors={colors.warning}/>
            <ThemeColorVariant colors={colors.info}/>
            <ThemeColorVariant colors={colors.success}/>
            <ThemeColorVariant colors={colors.primary}/>
            <ThemeColorVariant colors={colors.supporting}/>
            <ThemeColorVariant colors={colors.accent}/>
        </>
   );
};

