import React from 'react';
import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';
import {useTranslation} from "react-i18next";

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media(min-width: 760px) {
        width: 280px;
        margin-bottom: 0;
    }
`;

const Input = styled.input.attrs({
    type: 'search'
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
`;

const Search = ({search, setSearch}) => {
    const { t } = useTranslation();

    return (
        <InputContainer>
            <IoSearch />
            <Input placeholder={t("SEARCH_INPUT_PLACEHOLDER")} onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    );
};

export default Search;