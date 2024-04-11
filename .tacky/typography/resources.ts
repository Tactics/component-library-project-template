import {createGlobalStyle, useTheme} from "styled-components";

export const TypographyResources = createGlobalStyle<{ resources?: string[]; }>`
      ${props => {
            return (
                props.resources?.map(function (resource) {
                    return resource;
                })
            );
      }}
    `
