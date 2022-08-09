import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {Container} from '../Container/Container';
import {HeaderEl} from "./HeaderElement";
import {Wrapper} from "./Wrapper";
import {Title} from "./Title/Title";
import {SideB} from "./SideB";
import {ModeSwitcher} from "./ModeSwitcher";
import {TitleText} from "./Title/TitleText";

const Header = () => {
    const {t, i18n} = useTranslation();
    const themFromStorage = localStorage.getItem('theme');
    const [theme, setTheme] = useState(themFromStorage ? themFromStorage :  'light')

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

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