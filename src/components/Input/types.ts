import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";

export type InputProps = {
    value: any;
    onChange?: (text: string) => void;
    label: string;
    icon?: ReactNode;
    inputType?: string;
    keyboardType?: KeyboardTypeOptions;
    fieldButtonLabel?: string;
    fieldButtonFunction?: VoidFunction;
  }