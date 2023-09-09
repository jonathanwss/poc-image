import React from "react";
import { TouchableOpacity, TextInput } from "react-native";
import { ContainerStyled, TextStyled } from './styles'
import { InputProps } from './types'

const Input = ({
  value,
  onChange,
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}: InputProps) => {
  return (
    <ContainerStyled>
      {icon}
      {inputType == "password" ? (
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <TextStyled>
          {fieldButtonLabel}
        </TextStyled>
      </TouchableOpacity>
    </ContainerStyled>
  );
};

export default Input;
