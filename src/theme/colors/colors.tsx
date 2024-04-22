import React from 'react';
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";
import {ThemeColorVariant} from "./../theme-color-group/theme-color-group";

export type ColorType = 'ui' | 'palette';

export const ThemeColors = () => {
    const colors = useThemeColor();

    return (
        <>
            <ThemeColorVariant label="neutrals" colors={colors.neutrals}/>
            <ThemeColorVariant label="danger" colors={colors.danger}/>
            <ThemeColorVariant label="warning" colors={colors.warning}/>
            <ThemeColorVariant label="info" colors={colors.info}/>
            <ThemeColorVariant label="success" colors={colors.success}/>
            <ThemeColorVariant label="primary" colors={colors.primary}/>
            <ThemeColorVariant label="supporting" colors={colors.supporting}/>
            <ThemeColorVariant label="accent" colors={colors.accent}/>
        </>
    );
};

