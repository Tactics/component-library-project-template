import React from 'react';
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";
import {ThemeFont} from "./../theme-font/theme-font";

export const ThemeTypography = () => {
    const typography = useThemeFonts();

    return (
        <>
            <>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["9xl"]} size="9xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["8xl"]} size="8xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["7xl"]} size="7xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["6xl"]} size="6xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["5xl"]} size="5xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["4xl"]} size="4xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["3xl"]} size="3xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary["2xl"]} size="2xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary.xl} size="xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary.lg} size="lg"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary.md} size="md"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary.sm} size="sm"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.primary.xs} size="xs"/>
            </>
            <br/>
            <br/>
            <>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["9xl"]} size="9xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["8xl"]} size="8xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["7xl"]} size="7xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["6xl"]} size="6xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["5xl"]} size="5xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["4xl"]} size="4xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["3xl"]} size="3xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting["2xl"]} size="2xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting.xl} size="xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting.lg} size="lg"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting.md} size="md"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting.sm} size="sm"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.supporting.xs} size="xs"/>
            </>
            <br/>
            <br/>
            <>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["9xl"]} size="9xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["8xl"]} size="8xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["7xl"]} size="7xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["6xl"]} size="6xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["5xl"]} size="5xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["4xl"]} size="4xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["3xl"]} size="3xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent["2xl"]} size="2xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent.xl} size="xl"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent.lg} size="lg"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent.md} size="md"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent.sm} size="sm"/>
                <ThemeFont label="Almost before we knew it, we had left the ground." font={typography.accent.xs} size="xs"/>
            </>
        </>

    );
};

