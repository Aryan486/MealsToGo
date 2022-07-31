import React, { useContext } from "react";
import { TouchableOpacity, StatusBar, View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurantInfoCard.components.js";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context.js";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.components.js";
import { LocationContext } from "../../../services/location/location.context.js";

const Container = styled.SafeAreaView`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const CardContainer = styled.View`
    flex:1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const RestaurantScreen = ({ navigation }) => {
    const { restaurants, isLoading, isError } = useContext(RestaurantContext);
    const { isLoadingLocation } = useContext(LocationContext)

    return (
        <Container>
            <StatusBar backgroundColor="white" />
            <Search />
            <CardContainer>
                {(isLoading || isLoadingLocation) ?
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
                                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
                                        <RestaurantInfoCard restaurant={item} />
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item) => item.vicinity}
                        />
                    )}
            </CardContainer>
        </Container>
    );
};