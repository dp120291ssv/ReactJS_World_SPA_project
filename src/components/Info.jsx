import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Meta, Tag, TagsGroup} from "./Details/Meta";
import axios from "axios";
import {filterByCode} from "../config";

export const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
        gap: 5rem;
    }
`;

export const InfoImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const InfoTitle = styled.h1`
    margin-top: 0;
    font-weight: var(--fw-normal);
`;

const InfoListGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

const InfoList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media (min-width: 1024px) {
        &:not(:last-child) {
            margin-bottom: 0;
            margin-right: 2rem;
        }
    }
`;

const InfoListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        axios.get(filterByCode(borders)).then(
            ({data}) => setNeighbors(data)
        )
    }, [borders]);

    return (
        <Wrapper>
            <InfoImg src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <InfoListGroup>
                    <InfoList>
                        <InfoListItem>
                            <b>Native Name:</b> {nativeName}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Population</b>: {population}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Region</b>: {region}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Sub Region:</b> {subregion}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Capital</b>: {capital}
                        </InfoListItem>
                    </InfoList>
                    <InfoList>
                        <InfoListItem>
                            <b>Top Level Domain:</b> {topLevelDomain.map(d => (<span key={d}>{d} </span>))}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Currency</b>: {currencies.map(c => (<span key={c.code}>{c.name} </span>))}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Languages</b>: {languages.map(l => (<span key={l.name}>{l.name} </span>))}
                        </InfoListItem>
                    </InfoList>
                </InfoListGroup>
                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (
                        <span>There is no border country</span>
                    ) : (
                        <TagsGroup>
                            {!neighbors.length ? (<span>Loading...</span>) : neighbors.map(b => (
                                <Tag key={b.name} onClick={() => push(b.name)}>{b.name}</Tag>
                            ))}
                        </TagsGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
};

export default Info;