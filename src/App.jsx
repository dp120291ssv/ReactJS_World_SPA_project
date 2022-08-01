import Header from './components/Header';
import Main from './components/Main';
import Controls from "./components/Controls";
import axios from 'axios';
import {useEffect, useState} from "react";
import {ALL_COUNTRIES} from "./config";
import List from "./components/List";
import Card from "./components/Card";

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data))
    }, [])

    return (
        <>
            <Header/>
            <Main>
                <Controls />
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
            </Main>
        </>
    );
}

export default App;
