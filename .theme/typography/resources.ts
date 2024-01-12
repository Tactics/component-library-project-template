import {createGlobalStyle, useTheme} from "styled-components";
import {TypographyResourcesI} from "./contracts/resources";

export const TypographyResources = createGlobalStyle<{ resources?: TypographyResourcesI; }>`
      ${props => {
            return (
                props.resources?.map(function (resource) {
                    return resource;
                })
            );
      }}
    `
