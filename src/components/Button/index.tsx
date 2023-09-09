import React from "react";
import { ButtonStyled, TextStyled } from './styles'
import { ButtonProps } from './types'

const Button = ({ label, onPress, fullWidth, bgColor }: ButtonProps) => {
  return (
    <ButtonStyled
      onPress={onPress}
      style={{
        backgroundColor: bgColor ? bgColor : "#AD40AF",
        width: fullWidth ? "100%" : 80,
      }}
    >
      <TextStyled>
        {label}
      </TextStyled>
    </ButtonStyled>
  );
};

export default Button;
