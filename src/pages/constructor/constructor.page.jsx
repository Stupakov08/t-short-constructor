import React from 'react';
import Header from '../../components/header/header.component';
import ItemConstructor from '../../components/item-constructor/item-constructor';
import {
    Content,
} from './constructor.styled';

const Constructor = () => {
    return (
        <>
            <Header></Header>
            <Content>
                <ItemConstructor></ItemConstructor>
            </Content>
        </>
    )
}

export default Constructor;