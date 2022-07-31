import React, { useContext } from "react";
import { SafeAreaView, StatusBar, Text, View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurantInfoCard.components.js";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context.js";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.components.js";

const Container = styled.SafeAreaView`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const CardContainer = styled.View`
    flex:1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const RestaurantScreen = () => {
    const { restaurants, isLoading, isError } = useContext(RestaurantContext);

    return (
        <Container>

            <StatusBar backgroundColor="white" />
            <Search />
            <CardContainer>
                {isLoading ?
                    (
                        <View>
                            <ActivityIndicator color={Colors.red400} size={50} />
                        </View>
                    ) :
                    (
                        <FlatList
                            data={restaurants}
                            renderItem={({ item }) => {
                                return (
                                    <RestaurantInfoCard restaurant={item} />
                                )
                            }}
                            keyExtractor={(item) => item.vicinity}
                        />
                    )}
            </CardContainer>
        </Container>
    );
};