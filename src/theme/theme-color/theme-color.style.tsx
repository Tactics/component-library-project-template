import styled from 'styled-components'

export const ThemeColorSC = styled.div`
    flex-grow: 1;
`

export const ThemeColorDisplaySC = styled.div<{ color: string;}>`
    background: ${(props) => props.color};
    box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
    border-radius: 8px;
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0.5rem;
`

export const ThemeColorInfoSC = styled.div`
`

export const ThemeColorInfoHexSC = styled.div<{ font: string; color: string}>`
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`

export const ThemeColorInfoNameSC = styled.div<{ font: string; color: string}>`
    margin-top: .25rem;
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`