import styled from "styled-components";

export interface IconStyleProps {
  height: string;
  width: string;
}

export const Svg = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

export const StyledIcon = styled(Svg)<{ style: IconStyleProps }>`
  width: ${(props) => props.style.width};
  height: ${(props) => props.style.height};
`;
