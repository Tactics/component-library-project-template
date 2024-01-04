import {createContext} from "react";
import {Contrast} from "../contrast";
export const ContrastCtx = createContext<Contrast>(Contrast.LIGHT);
