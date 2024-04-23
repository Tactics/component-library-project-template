import React from "react";
import { useButtonStyle } from "./../button/use-button-style";
import {
  ButtonStyle,
  ButtonStyleProps,
  LabelStyle,
  LabelStyleProps,
} from "./../button/button.style";

export const Button = ({ children }: { children: React.ReactNode }) => {
  const style: ButtonStyleProps = useButtonStyle();

  return <ButtonStyle style={style}>{children}</ButtonStyle>;
};

Button.Label = function ButtonLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  const style: LabelStyleProps = {};

  return <LabelStyle style={style}>{children}</LabelStyle>;
};
