import {AlternateConfigI, AlternateI, AlternateItem} from "./contracts/alternate";

export const Alternate = ({base, config} : {
    base: AlternateItem[]
    config?: AlternateItem[],
}) : AlternateItem[] => {
    return config ? config : base
}
