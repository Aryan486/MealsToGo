import React from 'react';
import { ScrollView } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurantInfoCard.components';
import { SafeArea } from '../../../utils/safe-area.utils';
import { List } from 'react-native-paper';

export const RestaurantDetail = ({ route }) => {
    const { restaurant } = route.params;

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon="bread-slice" />}
                >
                    <List.Item title="Bread Toast" />
                    <List.Item title="Parantha" />
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="hamburger" />}
                >
                    <List.Item title="Thali" />
                    <List.Item title="Hamburger" />
                    <List.Item title="Chinese" />
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon="food" />}
                >
                    <List.Item title="Thali" />
                    <List.Item title="Mexican" />
                    <List.Item title="South Indian" />
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="bottle-soda" />}
                >
                    <List.Item title="Tea" />
                    <List.Item title="Coffee" />
                    <List.Item title="Shake" />
                    <List.Item title="Soda's" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    );
}