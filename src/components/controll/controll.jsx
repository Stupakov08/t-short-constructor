import React from 'react'
import {
    Controll,
    ControllTitle,
    ControllVariants,
    ControllVariant
} from './controll.styles';

const ConstructorControll = ({ title, items, activeItem, baseUrl, handleClick }) => {
    return (
        <Controll>
            <ControllTitle>{title}</ControllTitle>
            <ControllVariants>
                {items && items.map((item) => (
                    <ControllVariant url={require('../../' + baseUrl + item.url)}
                        active={item.id === activeItem.id}
                        onClick={handleClick(item)}
                        key={item.id}>
                    </ControllVariant>
                ))}
            </ControllVariants>
        </Controll>
    );
}


export default ConstructorControll;