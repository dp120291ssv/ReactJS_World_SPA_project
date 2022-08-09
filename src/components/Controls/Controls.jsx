import React, {useEffect, useState} from 'react';
import Search from './Search/Search'
import {CustomSelect} from "./CustomSelect";
import {Wrapper} from "./Wrapper";
import {useTranslation} from "react-i18next";
import {options} from '../../constants'

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