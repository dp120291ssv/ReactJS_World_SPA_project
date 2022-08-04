import React, {useEffect, useState} from 'react';
import Search from './Search'
import {CustomSelect} from "./CustomSelect";
import styled from 'styled-components';
import {useTranslation} from "react-i18next";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 760px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        onSearch(search, region?.value);
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect
                options={options}
                placeholder={t("FILTER_PLACEHOLDER")}
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    );
};

export default Controls;