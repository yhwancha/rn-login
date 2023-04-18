import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn} from './src/screens/signIn';
import {SignedIn} from './src/screens/signedIn';

const Stack = createStackNavigator();

const HelloWorldApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="signedIn" component={SignedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HelloWorldApp;