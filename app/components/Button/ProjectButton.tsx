import React from "react";
import ButtonWrapper from "./ButtonWrapper";

interface ButtonProp {
  buttonColor: string;
  text: string;
  textColor: string;
}

export default function ProjectButtonn({
  buttonColor,
  text,
  textColor,
}: ButtonProp) {
  return (
    <a href={""}>
      <ButtonWrapper>{text}</ButtonWrapper>
    </a>
  );
}
