import { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import * as S from "./style";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <S.Container>{children}</S.Container>
    </SafeAreaView>
  );
};
export default Container;
