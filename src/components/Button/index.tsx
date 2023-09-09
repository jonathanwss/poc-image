import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface IButton {
  label: string;
  onPress: VoidFunction;
  fullWidth?: boolean;
  bgColor?: string;
}

const Button = ({ label, onPress, fullWidth, bgColor }: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor ? bgColor : "#AD40AF",
        padding: 18,
        borderRadius: 10,
        marginBottom: 30,
        width: fullWidth ? "100%" : 80,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 18,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
