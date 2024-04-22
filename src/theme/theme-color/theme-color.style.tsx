import styled from 'styled-components'

export const ThemeColorSC = styled.div`
    min-width: 70px;
    max-width: calc(100% / 12);
    padding: 20px 0;
`

export const ThemeColorDisplaySC = styled.div<{ color: string;}>`
    background: ${(props) => props.color};
    box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
    border-radius: 8px;
    width: 4rem;
    height: 2.5rem;
    min-width: 2.5rem;
    max-width: 4rem;
    margin-bottom: 0.5rem;
`

export const ThemeColorInfoSC = styled.div`
`

export const ThemeColorInfoHexSC = styled.div<{ font: string;}>`
    opacity: 0.6;
    font: ${(props) => props.font};
`

export const ThemeColorInfoNameSC = styled.div<{ font: string;}>`
    margin-top: 5px;
    opacity: 0.8;
    font: ${(props) => props.font};
`