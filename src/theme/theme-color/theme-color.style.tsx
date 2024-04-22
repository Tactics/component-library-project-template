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
    width: 2.5rem;
    height: 2.5rem;
    min-width: 2.5rem;
    max-width: 2.5rem;
`

export const ThemeColorInfoSC = styled.div`
`

export const ThemeColorInfoHexSC = styled.div`
    font-size: 12px;
    text-transform: lowercase;
    opacity: 0.8;
`

export const ThemeColorInfoNameSC = styled.div`
    font-size: 14px;
    margin-top: 5px;
    font-weight: 200;
`