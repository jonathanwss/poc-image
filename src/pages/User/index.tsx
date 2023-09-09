import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/authContext";
import { updateUserProfilePicture } from "@/services/userService";
import * as React from "react";
import { View, Text } from "react-native";

function UserScreen() {
  const { user, logout } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 100,
      }}
    >
      <Avatar
        initialImageUri={user?.profilePictureUri}
        onImageChange={(base64) => {
          user && updateUserProfilePicture(user?.email, base64);
        }}
      />
      <View style={{ paddingTop: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{user?.email}</Text>
      </View>
      <View style={{ width: "80%", paddingTop: 100 }}>
        <Button label="Logout" onPress={logout} fullWidth bgColor="#cccc" />
      </View>
    </View>
  );
}

export default UserScreen;
