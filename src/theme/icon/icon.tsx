import React from 'react';
import { StyledIcon, IconStyleProps } from "./icon.style";
import { useThemeColor } from "@tactics/tacky";

export const Icon = (
    { size, children } : { size : string, children : React.ReactElement }
) => {
    const style : IconStyleProps = {
        width: size,
        height: size
    }

    return  (
        <StyledIcon style={style} viewBox='0 0 24 24'>
            { children }
        </StyledIcon>
    );
}

Icon.Cloud = function Cloud(
    { color } : { color : string }
) {
    return (
        <path
            fill={color}
            d="M19.47,10.54A6,6,0,0,0,14,7a5.82,5.82,0,0,0-1.39.18,5,5,0,0,0-9,2A3,3,0,0,0,4.5,15h1a4,4,0,0,0,0,.5A3.5,3.5,0,0,0,9,19h9.17a4.33,4.33,0,0,0,1.3-8.46ZM4.5,13a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,3-3,3,3,0,0,1,2.22,1,6,6,0,0,0-2.66,4.13,3.49,3.49,0,0,0-1.5.87Zm13.67,4H9a1.5,1.5,0,0,1,0-3,1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.33,2.33,0,0,1,18.17,17Z"
        />
    );
}

Icon.Filter = function Cloud(
    { color } : { color : string }
) {
    return (
        <path
            fill={color}
            d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"
        />
    );
}

export const ThemeIcons = () => {
    const colors = useThemeColor();

    return (
        <>
            <Icon size="2rem">
                <Icon.Cloud color={ colors.primary.tint_500 }/>
            </Icon>
            <Icon size="2rem">
                <Icon.Filter color={colors.supporting.tint_500}/>
            </Icon>
        </>
    );
}