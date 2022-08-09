import React from 'react';
import {IoSearch} from 'react-icons/io5';
import {useTranslation} from "react-i18next";
import {InputContainer} from "./InputContainer";
import {Input} from "./Input";

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