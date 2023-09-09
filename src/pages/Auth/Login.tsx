import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthSubStackParamList } from ".";
//import LoginSVG from "../../assets/login.svg";
import { SvgUri } from "react-native-svg";
import { useState } from "react";
import { getUserByEmail, validateUserLogin } from "@/services/userService";
import { useAuth } from "@/contexts/authContext";

type LoginScreenNavigationProp = NavigationProp<AuthSubStackParamList, "Login">;

const LoginScreen = () => {
  const { login } = useAuth();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (validateUserLogin(email, password)) {
      const user = getUserByEmail(email)
      const profilePictureBase64 = user.profilePicture;
      const profilePictureUri = `data:image/png;base64,${profilePictureBase64}`;

      login(email, profilePictureUri);

    } else {
      Alert.alert("Erro", "E-mail ou senha inválidos");
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
        }}
      >
        <View style={{ alignItems: "center" }}></View>
        <Text
          style={{
            //fontFamily: "Roboto-Medium",
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>
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
          fieldButtonFunction={() => {}}
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
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        <Button label={"Login"} onPress={handleLogin} fullWidth />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
            width: "100%",
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{ marginLeft: 10 }}
          >
            <Text style={{ color: "#AD40AF", fontWeight: "bold" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
