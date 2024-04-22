import React from 'react';
import { useThemeFonts } from "@tactics/tacky/src/hooks/use-theme-fonts";
import { ThemeFontVariant } from "./../theme-font-group/theme-color-group";
import { StorybookUiElement } from "./../storybook/ui-element/ui-element";

export const ThemeTypography = () => {
    const typography = useThemeFonts();

    const primary = (
        <ThemeFontVariant font={typography.primary} />
    )

    const supporting = (
        <ThemeFontVariant font={typography.supporting} />
    )

    const accent = (
        <ThemeFontVariant font={typography.accent} />
    )

    return (
        <>
            <StorybookUiElement
                title="Primary"
                children={ primary }
            />
            <StorybookUiElement
                title="Supporting"
                children={ supporting }
            />
            <StorybookUiElement
                title="Accent"
                children={ accent }
            />
        </>

    )
};

