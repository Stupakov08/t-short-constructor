import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    ConstructorArea,
    RenderArea,
    RenderWrapper,
    ImageCanvas,
    Canvas,
    ControllWrapper,
    Controll,
    ControllTitle,
    ControllVariants,
    ControllVariant
} from './item-constructor.styles';

const ItemConstructor = () => {
    const colors = [{ color: "#000" }, { color: "#fff" }];
    const activecolor = "#000";
    return (
        <ConstructorArea>
            <RenderArea>
                <RenderWrapper>
                    <Canvas url={""}>
                        <ImageCanvas url={""}></ImageCanvas>
                    </Canvas>
                </RenderWrapper>
            </RenderArea>
            <ControllWrapper>
                <Controll>
                    <ControllTitle>Color:</ControllTitle>
                    <ControllVariants>
                        {colors.map((item) => (
                            <ControllVariant url={item.color} active={item.color === activecolor}>

                            </ControllVariant>
                        ))}

                    </ControllVariants>
                </Controll>
            </ControllWrapper>
        </ConstructorArea >
    );
}

const mapStateToProps = createStructuredSelector({

});
export default connect(ItemConstructor);