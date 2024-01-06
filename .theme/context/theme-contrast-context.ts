import {createContext} from "react";
import {Contrast} from "../enum/contrast";
export const ThemeContrastCtx = createContext<Contrast>(Contrast.LIGHT);
