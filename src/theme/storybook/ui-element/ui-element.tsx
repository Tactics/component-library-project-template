import React from 'react';
import {
    StorybookUiContainer,
    StorybookUiContent, StorybookUiHead, StorybookUiHeadTitle,
} from "./../ui-element/ui-element.style";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";

export const StorybookUiElement = (
    { title, children } : { title : string, children : React.ReactNode }
) => {

    const typography = useThemeFonts();
    const color = useThemeColor();

    return (
        <StorybookUiContainer>
            <StorybookUiHead color={color.neutrals.tint_500}>
                <StorybookUiHeadTitle
                    font={typography.primary.xl}
                    color={color.neutrals.tint_950}
                >
                        { title }
                </StorybookUiHeadTitle>
            </StorybookUiHead>
            <StorybookUiContent>
                { children }
            </StorybookUiContent>
        </StorybookUiContainer>
    );
};

