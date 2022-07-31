import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from './restaurants.navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screens';

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    const Settings = () => {
        return (
            <View>
                <Text>Settings tab!!!</Text>
            </View>
        )
    }

    const Map = () => {
        return (
            <View>
                <Text>Map tab!!!</Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Restaurants') {
                            iconName = "restaurant-outline"
                        } else if (route.name === 'Settings') {
                            iconName = "settings"
                        }
                        else if (route.name === "Maps") {
                            iconName = "map"
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}
            >
                <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
                <Tab.Screen name="Maps" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}