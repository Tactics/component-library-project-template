import styled from 'styled-components'

export const StorybookUiContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const StorybookUiHead = styled.div<{ color: string }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.color};
    padding-bottom: 1.5rem;
`
export const StorybookUiHeadTitle = styled.div<{ font: string; color: string }>`
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`

export const StorybookUiContent = styled.div`
    margin-bottom: 5rem;
`