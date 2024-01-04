import React, {useContext} from 'react';
import styled from 'styled-components'
import {HexColor, ThemeColors} from "../../../.theme/theme";
import {useThemeColorContext} from "../../../.theme/hooks/use-theme-colors-context";

interface ButtonStyle {
    background : HexColor,
    text: HexColor
}

const StyledButton = styled.button<{ style: ButtonStyle; }>`
  background: ${(props) => props.style.background};
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: ${(props) => props.style.text};
  margin: 0 1em;
  padding: 0.25em 1em;
`

export const Button = () => {
    const colors : ThemeColors = useThemeColorContext();

    const style : ButtonStyle = {
        background: colors.main.regular,
        text: colors.secondary.tint_6,
    }

    return (
        <StyledButton style={style}>
            Hallo
        </StyledButton>
    );
};
