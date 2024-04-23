import React from "react";
import { useThemeColor } from "@tactics/tacky";
import { StorybookUiThemeColorList } from "@tactics/tacky/storybook";
import { StorybookUiAdditionalColorList } from "@tactics/tacky/storybook";
import { StorybookUiElement } from "@tactics/tacky/storybook";
import { StorybookUiItem } from "@tactics/tacky/storybook";

export type ColorType = "ui" | "palette";

export const ThemeColors = () => {
  const colors = useThemeColor();

  const ui = (
    <>
      <StorybookUiItem
        caption="Neutrals"
        children={<StorybookUiThemeColorList colors={colors.neutrals} />}
      />
      <StorybookUiItem
        caption="Danger"
        children={<StorybookUiThemeColorList colors={colors.danger} />}
      />
      <StorybookUiItem
        caption="Warning"
        children={<StorybookUiThemeColorList colors={colors.warning} />}
      />
      <StorybookUiItem
        caption="Info"
        children={<StorybookUiThemeColorList colors={colors.info} />}
      />
    </>
  );

  const palette = (
    <>
      <StorybookUiItem
        caption="Primary"
        children={<StorybookUiThemeColorList colors={colors.primary} />}
      />
      <StorybookUiItem
        caption="Supporting"
        children={<StorybookUiThemeColorList colors={colors.supporting} />}
      />
      <StorybookUiItem
        caption="Accent"
        children={<StorybookUiThemeColorList colors={colors.accent} />}
      />
    </>
  );

  const additional =
    colors.additional.length > 0 ? (
      <StorybookUiItem
        caption="Additional"
        children={<StorybookUiAdditionalColorList colors={colors.additional} />}
      />
    ) : null;

  return (
    <>
      <StorybookUiElement title="Ui" children={ui} />
      <StorybookUiElement title="Palette" children={palette} />
      {additional ? (
        <StorybookUiElement title="Additional" children={additional} />
      ) : null}
    </>
  );
};
