import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthSubStackParamList } from ".";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createUser } from "@/services/userService";

type LoginScreenNavigationProp = NavigationProp<AuthSubStackParamList, "Login">;

const RegisterScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validateFields = () => {
    if (!email || !password || !repeatPassword) {
      Alert.alert("Error", "All fields are mandatory!");
      return false;
    }
    if (password !== repeatPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return false;
    }
    return true;
  };

  const registerUser = () => {
    if (validateFields()) {
      try {
        createUser(email, password);
        Alert.alert("Success", "User registered successfully!");
        navigation.goBack();
      } catch (error) {
        Alert.alert("Error", "There was an error registering the user.");

        console.error("Error registering user:", error);
      }
    }
  };


  return (
    <Container>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          paddingHorizontal: 25,
          paddingTop: 90,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 25, width: "100%" }}
        >
          <Text
            style={{
              //fontFamily: "Roboto-Medium",
              fontSize: 28,
              fontWeight: "500",
              color: "#333",
              marginBottom: 30,
            }}
          >
            Register
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 50,
            }}
          ></View>
          <Input
            label={"Email ID"}
            value={email}
            onChange={(e) => setEmail(e)}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />

          <Input
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e)}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />

          <Input
            label={"Confirm Password"}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e)}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />
          <View style={{ paddingTop: 50 }}>
            <Button label={"Register"} onPress={registerUser} fullWidth />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Text>Already registered?</Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Text style={{ color: "#AD40AF", fontWeight: "700" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default RegisterScreen;
