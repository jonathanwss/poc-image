import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";

const AvatarContainer = styled(TouchableOpacity)`
  width: 150px;
  height: 150px;
  
  border-radius: 78px;
  overflow: hidden;
  background-color: #f3f3f3;
  border: 2px dotted black;
`;

interface AvatarProps {
  initialImageUri?: string;
  onImageChange?: (base64: string) => void;
}

const Avatar: React.FC<AvatarProps> = ({ initialImageUri, onImageChange }) => {
  const [imageUri, setImageUri] = useState<string | undefined>(initialImageUri);

  const handlePress = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (pickerResult.canceled === true) {
      return;
    }

    setImageUri(pickerResult.assets[0].uri);

    if (onImageChange && pickerResult.assets[0].base64) {
      onImageChange(pickerResult.assets[0].base64);
    }
  };

  return (
    <AvatarContainer onPress={handlePress}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
    </AvatarContainer>
  );
};

export default Avatar;
