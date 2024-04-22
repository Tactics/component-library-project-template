import React from 'react';
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";
import {StorybookUiElement} from "./../storybook/ui-element/ui-element";
import {ThemeColorVariant} from "./../theme-color-group/theme-color-group";
import {ThemeFontVariant} from "@/theme/theme-font-group/theme-color-group";

export type ColorType = 'ui' | 'palette';

export const ThemeColors = () => {
    const colors = useThemeColor();

    const ui = (
        <>
            <ThemeColorVariant colors={colors.neutrals} label="Neutrals"/>
            <ThemeColorVariant colors={colors.danger} label="Danger"/>
            <ThemeColorVariant colors={colors.warning} label="Warning"/>
            <ThemeColorVariant colors={colors.info} label="Info"/>
        </>
    )

    const palette = (
        <>
            <ThemeColorVariant colors={colors.primary} label="Primary"/>
            <ThemeColorVariant colors={colors.supporting} label="Supporting"/>
            <ThemeColorVariant colors={colors.accent} label="Accent"/>
        </>
    )

    return (
        <>
            <StorybookUiElement
                title="Ui"
                children={ ui }
            />
            <StorybookUiElement
                title="Palette"
                children={ palette }
            />
        </>

    )
};

