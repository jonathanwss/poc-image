import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "@/pages/Auth";
import LoginScreen from "@/pages/Auth/Login";
import RegisterScreen from "@/pages/Auth/Register";

export type UnauthStackParamList = {
  Auth: undefined;
  Register: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<UnauthStackParamList>();

const UnauthenticatedRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default UnauthenticatedRoutes;
