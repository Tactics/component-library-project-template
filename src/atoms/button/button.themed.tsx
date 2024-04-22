import React from "react";
import {Button} from "./button";
import {ButtonStyleProps} from "./button.style";
import {useButtonStyle} from "./use-button-style";

export const ThemedButton = (
    { label } : { label : string }
) => {
    const style : ButtonStyleProps = useButtonStyle();

    return (
        <Button style={style}>
            <Button.Label>{label}</Button.Label>
        </Button>
    );
}