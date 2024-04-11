export const TypographyResources = ({ base, config } : {
    base: string[],
    config: string[],
}) : string[] => {
    return config ? config : base;
}