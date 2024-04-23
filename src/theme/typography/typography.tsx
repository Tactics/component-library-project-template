import React from "react";
import { useThemeFonts } from "@tactics/tacky";
import {
  StorybookUiElement,
  StorybookUiFont,
  StorybookUiItem,
} from "@tactics/tacky/storybook";

export const ThemeTypography = () => {
  const typography = useThemeFonts();

  const primary = (
    <>
      <StorybookUiItem
        caption="9xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["9xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="8xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["8xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="7xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["7xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="6xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["6xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="5xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["5xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="4xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["4xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="3xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["3xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="2xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary["2xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary.xl}
          />
        }
      />

      <StorybookUiItem
        caption="lg"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary.lg}
          />
        }
      />

      <StorybookUiItem
        caption="md"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary.md}
          />
        }
      />

      <StorybookUiItem
        caption="sm"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary.sm}
          />
        }
      />

      <StorybookUiItem
        caption="xs"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.primary.xs}
          />
        }
      />
    </>
  );

  const supporting = (
    <>
      <StorybookUiItem
        caption="9xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["9xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="8xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["8xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="7xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["7xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="6xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["6xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="5xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["5xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="4xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["4xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="3xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["3xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="2xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting["2xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting.xl}
          />
        }
      />

      <StorybookUiItem
        caption="lg"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting.lg}
          />
        }
      />

      <StorybookUiItem
        caption="md"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting.md}
          />
        }
      />

      <StorybookUiItem
        caption="sm"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting.sm}
          />
        }
      />

      <StorybookUiItem
        caption="xs"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.supporting.xs}
          />
        }
      />
    </>
  );

  const accent = (
    <>
      <StorybookUiItem
        caption="9xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["9xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="8xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["8xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="7xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["7xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="6xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["6xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="5xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["5xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="4xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["4xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="3xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["3xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="2xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent["2xl"]}
          />
        }
      />

      <StorybookUiItem
        caption="xl"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent.xl}
          />
        }
      />

      <StorybookUiItem
        caption="lg"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent.lg}
          />
        }
      />

      <StorybookUiItem
        caption="md"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent.md}
          />
        }
      />

      <StorybookUiItem
        caption="sm"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent.sm}
          />
        }
      />

      <StorybookUiItem
        caption="xs"
        children={
          <StorybookUiFont
            text="Almost before we knew it, we had left the ground."
            font={typography.accent.xs}
          />
        }
      />
    </>
  );

  return (
    <>
      <StorybookUiElement title="Primary" children={primary} />
      <StorybookUiElement title="Supporting" children={supporting} />
      <StorybookUiElement title="Accent" children={accent} />
    </>
  );
};
