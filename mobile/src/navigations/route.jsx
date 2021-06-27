import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const Route = () => {
  const isLoggedIn = useSelector((state) => state.firebase.auth.isEmpty);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <BottomTabNavigator />
      )}
    </NavigationContainer>
  );
};

export default Route;
