import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native"
import { LocationContext } from '../../../services/location/location.context';

const SearchConatiner = styled.View`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext)
    const [inputKeyword, setInputKeyword] = useState(keyword)

    return (
        <SearchConatiner>
            <Searchbar
                placeholder="Search"
                onChangeText={(text) => setInputKeyword(text)}
                onSubmitEditing={() => search(inputKeyword)}
                value={inputKeyword} />
        </SearchConatiner>
    )
}