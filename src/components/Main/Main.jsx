import React from 'react';
import {Container} from '../Container/Container'
import {Wrapper} from "./Wrapper";

const Main = ({children}) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Main;