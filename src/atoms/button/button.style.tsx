import styled from "styled-components";
import { HexColor } from "@tactics/tacky/contract";

export interface ButtonStyleProps {
  background: HexColor;
  borderColor: HexColor;
  text: HexColor;
  font: string;
}

export interface LabelStyleProps {}

export const ButtonStyle = styled.button<{ style: ButtonStyleProps }>`
  background: ${(props) => props.style.background};
  border-radius: 25px;
  border: 1px solid ${(props) => props.style.borderColor};
  color: ${(props) => props.style.text};
  margin: 0 1em;
  padding: 0.25em 1em;
  font: ${(props) => props.style.font};
`;

export const LabelStyle = styled.div<{ style: LabelStyleProps }>`
  color: white;
`;
