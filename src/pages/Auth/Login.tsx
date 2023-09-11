import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { getUserByEmail, validateUserLogin } from '@/services/userService';
import { useAuth } from '@/contexts/authContext';
import { AuthSubStackParamList } from '.';
import {
  ContainerColumnStyled,
  ContainerRegisterStyled,
  TextStyled,
  TitleStyled,
} from './styles';
import AuthScreenBg from '@/components/background/AuthScreenBg';

type LoginScreenNavigationProp = NavigationProp<AuthSubStackParamList, 'Login'>;

const LoginScreen = () => {
  const { login } = useAuth();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (validateUserLogin(email, password)) {
      const user = getUserByEmail(email);
      const profilePictureBase64 = user.profilePicture;
      const profilePictureUri = `data:image/png;base64,${profilePictureBase64}`;

      login(email, profilePictureUri);
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos');
    }
  };

  return (
    <Container>
      <AuthScreenBg>
        <ContainerColumnStyled>
          <TitleStyled>Login</TitleStyled>
          <Input
            label={'Email ID'}
            value={email}
            onChange={(e) => setEmail(e)}
            keyboardType='email-address'
            fieldButtonFunction={() => {}}
          />
          <Input
            label={'Password'}
            value={password}
            onChange={(e) => setPassword(e)}
            inputType='password'
            //fieldButtonLabel={'Forgot?'}
            fieldButtonFunction={() => {}}
          />
          <Button label={'Login'} onPress={handleLogin} fullWidth />
          <Text style={{ marginBottom: 20, fontSize: 16 }}>
            Or continue with
          </Text>
          <ContainerRegisterStyled>
            <Text style={{ fontSize: 16 }}>Don't have account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{ marginLeft: 10 }}
            >
              <TextStyled>Create Now</TextStyled>
            </TouchableOpacity>
          </ContainerRegisterStyled>
        </ContainerColumnStyled>
      </AuthScreenBg>
    </Container>
  );
};

export default LoginScreen;
