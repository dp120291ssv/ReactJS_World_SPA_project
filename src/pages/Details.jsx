import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import {searchByCountry} from "../config";
import Info from "../components/Info";
import {Button} from "../components/Button";

export const Details = () => {
    const {name} = useParams();
    const {push, goBack} = useHistory();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack/> Back
            </Button>
            {country && <Info push={push} {...country} /> }
        </div>
    );
};