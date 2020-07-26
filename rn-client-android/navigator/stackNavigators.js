import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/homeScreen';
import LikesScreen from '../screens/LikesScreen';

const Stack = createStackNavigator();

export const HomeStack = () => <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'black' } }}>
    <Stack.Screen name='Home' component={HomeScreen} />
</Stack.Navigator>

export const LikesStack = () => <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'red' } }}>
    <Stack.Screen name='Likes' component={LikesScreen} />
</Stack.Navigator>