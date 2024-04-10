import {TypographyResourcesConfigI, TypographyResourcesI} from "../contracts/resources";

export const TypographyResources = ({ base, config } : {
    base: string[],
    config: string[],
}) : string[] => {
    return config ? config : base;
}