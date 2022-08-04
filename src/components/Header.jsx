import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";

import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {Container} from './Container';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/'
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    display: flex;
    align-items: center;
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
    margin-right: 20px;
`;

const SideB = styled.div`
    display: flex;
`;

const TitleText = styled.span`
    margin-left: 8px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -moz-user-select: none; /* Firefox */
    user-select: none;
`;

const Header = () => {
    const {t, i18n} = useTranslation();
    const [theme, setTheme] = useState('light')

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        {t("MODULE_TITLE")}
                    </Title>
                    <SideB>
                        <ModeSwitcher onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <IoMoonOutline size="14px"/>
                            ) : (
                                <IoMoon size="14px"/>
                            )}
                            <TitleText>{theme} Theme</TitleText>
                        </ModeSwitcher>
                        <div>
                            <button onClick={() => handleChangeLng("en")}>EN</button>
                            <button onClick={() => handleChangeLng("es")}>ES</button>
                        </div>
                    </SideB>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;