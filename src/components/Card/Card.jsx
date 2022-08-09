import React from 'react';
import {Wrapper} from "./Wrapper";
import {Image} from "./Image";
import {Content} from "./Content";
import {Title} from "./Title";
import {List} from "./List";
import {ListItem} from "./ListItem";

const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <Image src={img} alt={name} />
            <Content>
                <Title>{name}</Title>
                <List>
                    {info.map(el => (
                        <ListItem key={el.title}>
                            <b>{el.title}: </b> {el.description}
                        </ListItem>
                    ))}
                </List>
            </Content>
        </Wrapper>
    );
};

export default Card;