import styled from "styled-components";

export const ThemeFontDisplaySC = styled.div<{ font: string;}>`
    font: ${(props) => props.font};
`