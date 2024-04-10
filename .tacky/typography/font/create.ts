
export const Font = ({family, scale} : {
    family: string
    scale: string,
}) : string => {
    return scale + ' ' + family;
}