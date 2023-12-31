import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonStyled = styled(TouchableOpacity)`
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 30px;
`;

export const TextStyled = styled(Text)`
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
`