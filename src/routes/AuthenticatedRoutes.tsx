import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/pages/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FilmsScreen from "@/pages/Films";
import UserScreen from "@/pages/User";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export type AuthStackParamList = {
  Home: undefined;
  Films: undefined;
  User: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createMaterialBottomTabNavigator();
const AuthenticatedRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      //activeColor="#F3F3"
      inactiveColor="#000"
      shifting

      barStyle={{ backgroundColor: "#f3f3f3", height: "8%" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="home" size={focused ? 29 : 24} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Films"
        component={FilmsScreen}
        options={{
          
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="movie" size={focused ? 29 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="person" size={focused ? 29 : 24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedRoutes;

{
  /* <Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator> */
}
