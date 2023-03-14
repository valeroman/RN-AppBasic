import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../pages/HomeScreen';
import { UnoScreen } from '../pages/UnoScreen';

    const Stack = createStackNavigator();

    export const  Navigator = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="UnoScreen" component={ UnoScreen } />
            </Stack.Navigator>
        );
    }