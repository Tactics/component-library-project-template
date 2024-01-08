import React from 'react';
import {Preview, StoryContext} from '@storybook/react';
import {Globals} from '@storybook/types';
import {Contrast} from "../.theme/enum/contrast";
import {ThemeCtx} from "../.theme/context/theme-context";
import {ThemeContrastCtx} from "../.theme/context/theme-contrast-context";
import {createGlobalStyle} from "styled-components";
import {BaseTheme} from "../.theme/base-theme/base-theme";
import {Theme} from "../.theme/theme/theme";
import {ThemeI} from "../.theme/theme/contracts/theme";
import {TypographyResourcesI} from "../.theme/typography/contracts/resources";
import {buildProvidersTree} from "../.theme/tools/buildProvidersTree";

const Base = BaseTheme;

const Antwerpen = Theme({
        base: BaseTheme,
        config: {
            colors: {
                light: {
                    main: {
                        regular: '#96b1c2'
                    }
                },
                contrast: {
                    main: {
                        regular: '#eb34de'
                    }
                }
            },
            typography: {
                resources:
                    [
                        "@font-face { font-family: \"Antwerpen Small\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/AntwerpenSmallCaps-Regular.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Antwerpen Regular\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/Antwerpen-Regular.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Antwerpen Tall\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/AntwerpenTall-Tall.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 300; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Light.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 300; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Light-Italic.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Regular.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 500; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Regular-Italic.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 700; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Bold.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 700; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-Bold-Italic.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"normal\"; font-weight: 800; src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-ExtraBold.woff) format(\"woff\"); }",
                        "@font-face { font-family: \"Sun Antwerpen\"; font-style: \"italic\"; font-weight: 800 src: url(https://cdn.antwerpen.be/core_branding_scss/4.2.2/assets/fonts/SunAntwerpen-ExtraBold-Italic.woff) format(\"woff\"); }"
                    ],
                fonts: {
                    "font-family": {
                        main: "Antwerpen Regular"
                    }
                }
            }
        }
    }
);

const Mechelen = Theme({
        base: BaseTheme,
        config: {
            colors: {
                light: {
                    main: {
                        regular: '#189ad3'
                    }
                },
            },
            typography: {
                resources:
                    [
                        "@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');"
                    ],
                fonts: {
                    "font-family": {
                        main: "Rubik Doodle Shadow"
                    }
                }
            }
        }
    }
);

const themes: Record<string, ThemeI> = { Base, Antwerpen, Mechelen };
const [default_theme_key, default_theme] = Object.entries(themes)[0];

const contrasts: Record<string, Contrast> = {
    light: Contrast.LIGHT,
    dark: Contrast.DARK,
    high_contrast: Contrast.HIGH_CONTRAST,
};
const [default_contrast_key, default_contrast] = Object.entries(contrasts)[0];

const TypographyResources = createGlobalStyle<{ resources?: TypographyResourcesI; }>`
  ${
    props => (props.resources?.map(function (resource) { return resource}))
  }
`

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: default_theme_key,
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: Object.keys(themes),
                dynamicTitle: true,
            },
        },
        contrast: {
            description: 'Global contrast for components',
            defaultValue: default_contrast_key,
            toolbar: {
                title: 'Contrast',
                icon: 'circlehollow',
                items: Object.keys(contrasts),
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context: StoryContext<Globals>) => {

            const contrast_key: string | undefined = context.globals?.contrast;
            const contrast = contrast_key && contrasts[contrast_key] ? contrasts[contrast_key] : default_contrast;

            const theme_key: string | undefined = context.globals?.theme;
            const theme = theme_key && themes[theme_key] ? themes[theme_key] : default_theme;

            const ProvidersTree = buildProvidersTree(
                [
                    [ThemeContrastCtx.Provider, {value : contrast}],
                    [ThemeCtx.Provider, {value : theme}],
                ]
            );

            return <>
                <TypographyResources resources={theme.typography.resources}/>
                <ProvidersTree>
                    <Story/>
                </ProvidersTree>
            </>;
        },
    ],
};

export default preview;
