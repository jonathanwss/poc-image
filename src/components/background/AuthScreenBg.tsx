import React, { ReactNode } from 'react';
import { Dimensions, ImageBackground, View, Text } from 'react-native';

const image = { uri: '' };

const screenWidth = Dimensions.get('window').width;

const AuthScreenBg = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        width: '100%',
        paddingTop: 10,

        backgroundColor: '#BFDBFE',
      }}
    >
      <ImageBackground
        source={require('../../assets/Login.png')}
        resizeMode='cover'
      >
        <View
          style={{
            height: 50,
          }}
        ></View>
        <View>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default AuthScreenBg;
