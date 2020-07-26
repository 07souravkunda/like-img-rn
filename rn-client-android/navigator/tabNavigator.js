import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeStack, LikesStack } from './stackNavigators';

const Tab = createMaterialBottomTabNavigator();

export const BottomTab = () => <Tab.Navigator shifting={true}>
    <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ color }) => {
            return <Icon name="ios-home" color={color} size={26} />
        },
        tabBarColor: 'black',
    }} />
    <Tab.Screen name="Likes" component={LikesStack} options={{
        tabBarIcon: ({ color }) => {
            return <Icon name="ios-heart" color={color} size={26} />
        },
        tabBarColor: 'red',
    }} />
</Tab.Navigator>