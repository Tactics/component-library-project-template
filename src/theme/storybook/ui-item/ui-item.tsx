import React from 'react';
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";
import {useThemeColor} from "@tactics/tacky/src/hooks/use-theme-colors";
import {
    StorybookUiItemCaption,
    StorybookUiItemContainer,
    StorybookUiItemContent
} from "./../ui-item/ui-item.style";

export const StorybookUiItem = (
    { caption, children } : { caption : string, children : React.ReactNode }
) => {

    const typography = useThemeFonts();
    const color = useThemeColor();

    return (
        <StorybookUiItemContainer>
            <StorybookUiItemCaption
                font={ typography.primary.sm }
                color={ color.neutrals.tint_900 }
            >
                { caption }
            </StorybookUiItemCaption>
            <StorybookUiItemContent>
                { children }
            </StorybookUiItemContent>
        </StorybookUiItemContainer>
    );
};

