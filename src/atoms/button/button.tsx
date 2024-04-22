import React from 'react';
import {
    StyledButton,
    ButtonStyleProps,
    StyledButtonLabel,
    ButtonLabelStyleProps,
} from "./button.style";

export const Button = (
    { children, style } : { children : React.ReactNode, style : ButtonStyleProps }
) => {
    return (
        <StyledButton style={style}>
            {children}
        </StyledButton>
    );
};

Button.Label = function ButtonLabel(
    {children} : {children : React.ReactNode}
) {
    const style : ButtonLabelStyleProps = {}

    return (
        <StyledButtonLabel style={style}>
            {children}
        </StyledButtonLabel>
    );
}
