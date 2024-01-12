import {TypographyResourcesConfigI, TypographyResourcesI} from "../contracts/resources";

export const TypographyResources = ({ base, config } : {
    base: TypographyResourcesI,
    config?: TypographyResourcesConfigI,
}) : TypographyResourcesI => {
    return config ? config : base;
}