import React from 'react';

import {TypographyFontI} from "@tactics/tacky/src/typography/contracts/font";
import {ThemeFont} from "./../theme-font/theme-font";
import {StorybookUiItem} from "./../storybook/ui-item/ui-item";

export const ThemeFontVariant = (
    { font } : { font : TypographyFontI }
) => {

    return (
        <>
            <StorybookUiItem
                caption="9xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["9xl"]} /> }
            />

            <StorybookUiItem
                caption="8xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["8xl"]} /> }
            />

            <StorybookUiItem
                caption="7xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["7xl"]} /> }
            />

            <StorybookUiItem
                caption="6xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["6xl"]} /> }
            />

            <StorybookUiItem
                caption="5xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["5xl"]} /> }
            />

            <StorybookUiItem
                caption="4xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["4xl"]} /> }
            />

            <StorybookUiItem
                caption="3xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["3xl"]} /> }
            />

            <StorybookUiItem
                caption="2xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font["2xl"]} /> }
            />

            <StorybookUiItem
                caption="xl"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font.xl} /> }
            />

            <StorybookUiItem
                caption="lg"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font.lg} /> }
            />

            <StorybookUiItem
                caption="md"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font.md} /> }
            />

            <StorybookUiItem
                caption="sm"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font.sm} /> }
            />

            <StorybookUiItem
                caption="xs"
                children={ <ThemeFont label="Almost before we knew it, we had left the ground." font={font.xs} /> }
            />
        </>
    );
};

