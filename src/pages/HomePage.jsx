import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";


export const HomePage = ({countries}) => {
    const {push} = useHistory();
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const handleSearch = useCallback((search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter(country => country.region.includes(region))
        }

        if (search) {
            data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    },[countries])

    useEffect(() => {
        handleSearch();
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.map(country => {
                    const countryInfo = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: country.region
                            },
                            {
                                title: 'Capital',
                                description: country.capital
                            }
                        ]
                    }
                    return <Card key={country.name} onClick={() => push(`/country/${country.name}`)} {...countryInfo} />
                })}
            </List>
        </>
    );
};