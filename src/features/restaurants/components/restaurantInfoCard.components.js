import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { SvgXml } from 'react-native-svg';

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const RestaurantInfo = styled.View`
    padding: ${(props) => props.theme.space[3]}
    `;

    const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.title};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-family: ${props => props.theme.fonts.heading};
    `;

    const Address = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-family: ${props => props.theme.fonts.body};
    `;

    const RatingStyle = styled.View`
    flex-direction:row;
    padding-top: ${(props) => props.theme.space[1]}
    padding-bottom: ${(props) => props.theme.space[1]}
    `;

    const OpenContainer = styled(View)`
    flex:1;
    flex-direction:row;
    justify-content: flex-end;
    `;

    const Section = styled(View)`
    flex-direction:row;
    align-items:center
    `;

    const CardContainer = styled.View`
    margin:${(props) => props.theme.space[1]};
    `;

    const {
        name = "RestaurantName",
        icon = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIOzzTmSEZjWIScs865U59oKTfIK0oz1K2A&usqp=CAU"
        ],
        isOpenNow = true,
        rating = 4,
        vicinity = "9th Street",
        placeID = "some random id"
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <CardContainer>
            <Card elevation={5}>
                <Card.Cover key={name} source={{ uri: icon[0] }} />
                <RestaurantInfo>
                    <Title>{name}</Title>
                    <Section>
                        <RatingStyle>
                            {ratingArray.map((_, i) => (
                                <SvgXml key={`star-${placeID}-${i}`} xml={star} height={20} width={20} />
                            ))}
                            <OpenContainer>
                                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                            </OpenContainer>
                        </RatingStyle>
                    </Section>
                    <Address>{vicinity}</Address>
                </RestaurantInfo>
            </Card>
        </CardContainer>
    );
}
