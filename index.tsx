import {TypographyResources} from './.tacky/typography/resources';
import {AnimationResources} from './.tacky/animation/resources';
import {buildProvidersTree} from "./.tacky/tools/buildProvidersTree";
import {ThemeCtx} from "./.tacky/context/theme-context";
import {ThemeModeCtx} from "./.tacky/context/theme-mode-context";
import {ThemeVariantsKeyT} from "./.tacky/theme/contracts/theme";
import {ThemeI} from "./.tacky/theme/contracts/theme";

export {
    TypographyResources,
    AnimationResources,
    buildProvidersTree,
    ThemeCtx,
    ThemeModeCtx
    /** Add your components here for short imports in the project using this component library **/

};

export type {
    ThemeI,
    ThemeVariantsKeyT
    /** Add your types here for short imports in the project using this component library **/

};
