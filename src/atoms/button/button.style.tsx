import styled from 'styled-components'
import {HexColor} from "../../../.tacky/colors/contracts/hex-color";

export interface ButtonStyleProps {
    background : HexColor,
    borderColor: HexColor,
    text: HexColor,
    font: string
}

export const Button = styled.button<{ style: ButtonStyleProps;}>`
  background: ${(props) => props.style.background};
  border-radius: 25px;
  border: 1px solid ${(props) => props.style.borderColor};
  color: ${(props) => props.style.text};
  margin: 0 1em;
  padding: 0.25em 1em;
  font: ${(props) => props.style.font};
`

export interface ButtonLabelStyleProps {}

export const ButtonLabel = styled.div<{ style: ButtonLabelStyleProps; }>`
  color: white;  
`