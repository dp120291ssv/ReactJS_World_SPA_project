import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {ALL_COUNTRIES} from "../config";

export const HomePage = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data))
    }, [])
    return (
        <>
            <Controls/>
            <List>
                {countries.map(country => {
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
                    return (
                        <Card key={country.name} {...countryInfo} />
                    )
                })}
            </List>
        </>
    );
};