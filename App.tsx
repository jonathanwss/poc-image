import * as React from 'react'
import { AuthProvider } from "@/contexts/authContext";
import Routes from "@/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
