import React from 'react';
import { Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SignInScreen></SignInScreen>
    </View>
  );
};
export default HelloWorldApp;