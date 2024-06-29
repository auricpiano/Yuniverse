import React from 'react';
import {View, Text, TextField, Button} from 'react-native-ui-lib';
import { NavigationProps } from '../types/Navigation';

export default function LoginScreen ({ navigation }: NavigationProps) {
  return (
    <View flex paddingH-25 paddingB-20 center>
      <Text blue50 text20>Test Login Page</Text>
      <TextField text50 placeholder="username" grey10/>
      <TextField text50 placeholder="password" secureTextEntry grey10/>
      <View marginT-100 center>
        <Button text70 white background-orange30 label="Login"/>
        <Button link text70 orange30 label="Sign Up" marginT-20/>
        <Button label="To Home" onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
  );
}
