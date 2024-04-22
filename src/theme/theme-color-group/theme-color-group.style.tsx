import styled from 'styled-components'
import {ButtonStyleProps} from "@/atoms/button/button.style";

export const ThemeColorsGroupSC = styled.div`
    width: 100%;
    display: flex;
`

export const ThemeColorsGroupTitleSC = styled.div<{ font: string;}>`
    padding-top: 20px;
    padding-right: 50px;
    width: 100px;
    text-align: right;
    font: ${(props) => props.font};
`