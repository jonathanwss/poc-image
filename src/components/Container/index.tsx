import { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import { ContainerStyled } from "./style";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ContainerStyled>{children}</ContainerStyled>
    </SafeAreaView>
  );
};
export default Container;
