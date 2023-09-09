import React, { useState } from "react";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AvatarContainer } from './style'
import { AvatarProps } from './types'

const Avatar: React.FC<AvatarProps> = ({ initialImageUri, onImageChange }: AvatarProps) => {
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
