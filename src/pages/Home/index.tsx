import * as React from "react";
import { View, Text } from "react-native";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff2",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "700" }}>
        Home Screen example
      </Text>
    </View>
  );
}

export default HomeScreen;
