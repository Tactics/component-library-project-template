import { ButtonStyleProps } from "@/atoms/button/button.style";
import {
  AlternateItem,
  ColorsI,
  TypographyFontsI,
} from "@tactics/tacky/contract";
import {
  useThemeFonts,
  useThemeColor,
  useThemeAlternate,
} from "@tactics/tacky";
import {
  LookupAdditionalColor,
  LookupAlternate,
  orDefault,
} from "@tactics/tacky/tool";

export const useButtonStyle = (): ButtonStyleProps => {
  const colors: ColorsI = useThemeColor();
  const fonts: TypographyFontsI = useThemeFonts();
  const alternates: AlternateItem[] = useThemeAlternate();

  const alternate = LookupAlternate({
    name: "Button",
    alternates: alternates,
  });

  const bg_color = LookupAdditionalColor({
    name: "bg_ui",
    colors: colors.additional,
    fallback: colors.primary.tint_500,
  });

  return {
    background: orDefault(alternate, bg_color, ["style", "background"]),
    borderColor: orDefault(alternate, colors.primary.tint_700, [
      "style",
      "borderColor",
    ]),
    text: orDefault(alternate, colors.accent.tint_600, ["style", "text"]),
    font: orDefault(alternate, fonts.primary.md, ["style", "font"]),
  };
};
