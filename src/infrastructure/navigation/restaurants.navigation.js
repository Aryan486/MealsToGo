import React from 'react';
import { RestaurantDetail } from '../../features/restaurants/screens/restaurant-detail.screens';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screens';

const restaurantStack = createStackNavigator()

export const RestaurantNavigator = () => {
    return (
        <restaurantStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalPresentationIOS
            }}>
            <restaurantStack.Screen
                name="Restaurant"
                component={RestaurantScreen}
            />
            <restaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetail}
            />
        </restaurantStack.Navigator>
    )
} 