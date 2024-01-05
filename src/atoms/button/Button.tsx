import React, {useContext} from 'react';
import styled from 'styled-components'
import {HexColor, ThemeColors, ThemeFonts} from "../../../.theme/contracts/theme";
import {useThemeColorContext} from "../../../.theme/hooks/use-theme-colors-context";
import {useThemeFontsContext} from "../../../.theme/hooks/use-theme-fonts-context";

interface ButtonStyle {
    background : HexColor,
    text: HexColor,
    font: string
}

const StyledButton = styled.button<{ style: ButtonStyle; }>`
  background: ${(props) => props.style.background};
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: ${(props) => props.style.text};
  margin: 0 1em;
  padding: 0.25em 1em;
  font: ${(props) => props.style.font};
`

export const Button = () => {
    const colors : ThemeColors = useThemeColorContext();
    const fonts : ThemeFonts = useThemeFontsContext();

    console.log(fonts);

    const style : ButtonStyle = {
        background: colors.main.regular,
        text: colors.secondary.tint_6,
        font: fonts.main["4xl"],
    }

    console.log(fonts);

    return (
        <StyledButton style={style}>
            Hallo
        </StyledButton>
    );
};
