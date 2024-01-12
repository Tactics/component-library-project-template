import React from 'react';
import {Preview, StoryContext} from '@storybook/react';
import {Globals} from '@storybook/types';
import {ThemeCtx} from "../.theme/context/theme-context";
import {BaseTheme} from "../.theme/base-theme/base-theme";
import {buildProvidersTree} from "../.theme/tools/buildProvidersTree";
import {TypographyResources} from "../.theme/typography/resources";
import {ThemeVariant} from "../.theme/theme/theme-variant";
import {ThemeMode} from "../.theme/enum/theme-mode";
import {ThemeVariantsI, ThemeVariantsKeyT} from "../.theme/theme/contracts/theme";
import {ThemeModeCtx} from "../.theme/context/theme-mode-context";
import {useTheme} from "../.theme/hooks/use-theme";

/*
let themes: Record<string, ThemeI> = {};
const globbedThemes = import.meta.glob('./../themes/*.ts');

for (const filePath in globbedThemes) {
    const module = globbedThemes[filePath]();
    console.log(module);
    const themeNameTs = filePath.split('/').pop();

    if (themeNameTs) {
        const themeName = themeNameTs.split('.').slice(0, -1).join('.');

        module.then(
            function (value : any){
                console.log(value);

                themes[themeName] = Theme({
                    base: BaseTheme,
                    config: value?.default?.theme ? value?.default?.theme : {}
                });
            }
        );
    }
}

themes.base = BaseTheme;
console.log(themes);
 */


const Base = BaseTheme;

const Antwerpen = ThemeVariant({
        base: BaseTheme,
        config: {
            standard : {
                alternate: [
                    {
                        name: "Button",
                        style: {
                            background: '#ffd400'
                        }
                    }
                ],
                colors: {
                    main: {
                        regular: '#96b1c2'
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
                        fontFamily: {
                            main: "Antwerpen Regular"
                        }
                    }
                }
            },
            inverted : {
                colors: {
                    main: {
                        regular: '#eb34de'
                    }
                }
            }
        }
    }
);

const Mechelen = ThemeVariant({
        base: BaseTheme,
        config: {
            standard: {
                colors: {
                    main: {
                        regular: '#189ad3'
                    }
                },
                typography: {
                    resources:
                        [
                            "@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');"
                        ],
                    fonts: {
                        fontFamily: {
                            main: "Rubik Doodle Shadow"
                        }
                    }
                }
            }
        }
    }
);

const themes: Record<string, ThemeVariantsI> = { Base, Antwerpen, Mechelen };
const [default_theme_key, default_theme] = Object.entries(themes)[0];

const modes: Record<ThemeVariantsKeyT, ThemeMode> = {
    standard: ThemeMode.STANDARD,
    inverted: ThemeMode.INVERTED,
    contrast: ThemeMode.CONTRAST,
};
const [default_mode_key, default_mode] = Object.entries(modes)[0];

const preview: Preview = {
    globalTypes: {
        theme: {
            defaultValue: default_theme_key,
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: Object.keys(themes),
                dynamicTitle: true,
            },
        },
        mode: {
            defaultValue: default_mode_key,
            toolbar: {
                title: 'Mode',
                icon: 'circlehollow',
                items: Object.keys(modes),
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context: StoryContext<Globals>) => {

            const mode_key: ThemeVariantsKeyT = context.globals?.mode || default_mode_key;
            const mode = modes[mode_key];

            const theme_key: string = context.globals?.theme || default_theme_key;
            const theme = themes[theme_key];

            const theme_mode = theme[mode_key];

            const ProvidersTree = buildProvidersTree(
                [
                    [ThemeCtx.Provider, {value : theme_mode}],
                ]
            );

            return <>
                <TypographyResources resources={theme_mode.typography.resources}/>
                <ProvidersTree>
                    <Story/>
                </ProvidersTree>
            </>;
        },
    ],
};

export default preview;
