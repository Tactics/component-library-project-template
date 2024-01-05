import React from "react";
import {ExecutionProps} from "styled-components/dist/types";
import {Props} from "@mdx-js/react/lib";

export interface FontFace {
    name: string,
    style : React.NamedExoticComponent<ExecutionProps & Props>
}
