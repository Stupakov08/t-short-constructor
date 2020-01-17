import React from 'react'
import {
    Controll,
    ControllTitle,
    ControllVariants,
    ControllVariant
} from './controll.styles';

const ConstructorControll = ({ title, items, activeItem, baseUrl, handleClick, text }) => {
    return (
        <Controll>
            <ControllTitle>{title}</ControllTitle>
            <ControllVariants>
                {activeItem && items && items.map((item) => (
                    <ControllVariant url={baseUrl && item.url && require('../../' + baseUrl + item.url)}
                        active={item.id === activeItem.id}
                        onClick={handleClick(item)}
                        key={item.id}>
                        {item.name}
                    </ControllVariant>
                ))}
            </ControllVariants>
        </Controll >
    );
}


export default ConstructorControll;