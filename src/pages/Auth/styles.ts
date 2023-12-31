import styled from 'styled-components/native';
import { Text } from 'react-native';

export const ContainerColumnStyled = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-horizontal: 25px;
`;

export const RegisterContainerColumnStyled = styled(ContainerColumnStyled)`
  padding-top: 150px;
`;

export const ContainerRegisterStyled = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const TextStyled = styled(Text)`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const TitleStyled = styled(Text)`
  font-size: 28px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const SpaceView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ScrollViewContained = styled.View`
  height: 350px;
  width: 100%;
`;
