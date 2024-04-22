import styled from 'styled-components'

export const StorybookUiItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const StorybookUiItemCaption = styled.div<{ font: string; color: string}>`
    font: ${(props) => props.font};
    margin-bottom: 1rem;
    color: ${(props) => props.color};
`
export const StorybookUiItemContent = styled.div`
    margin-bottom: 1rem;
`