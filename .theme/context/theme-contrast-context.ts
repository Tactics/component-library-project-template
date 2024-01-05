import {createContext} from "react";
import {Contrast} from "../enum/contrast";
export const ContrastCtx = createContext<Contrast>(Contrast.LIGHT);
