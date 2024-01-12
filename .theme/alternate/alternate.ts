import {AlternateI} from "./contracts/alternate";

export const Alternate = ({base, config} : {
    base: AlternateI
    config: AlternateI,
}) : AlternateI => {
    return config ? config : base
}
