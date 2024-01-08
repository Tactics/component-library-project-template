export const Font = ({family, fontSize, lineHeight} : {
    family: string,
    fontSize: string,
    lineHeight: string | number,
}) : string => {
    return fontSize + '/' + lineHeight + ' ' + family;
}