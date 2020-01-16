import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { ColorsDocument, PrintsDocument, submitOrder } from '../../firebase/firebase.utils';
import { setColors, setActiveColor } from '../../redux/colors/colors.actions';
import { setPrints, setActivePrint } from '../../redux/prints/prints.actions';
import Controll from '../../components/controll/controll';
import html2canvas from 'html2canvas';
import CustomButton from '../../components/custom-button/custom-button.component';
import {
    ConstructorArea,
    RenderArea,
    RenderWrapper,
    ImageCanvas,
    Canvas,
    ControllWrapper,
    PushDown
} from './item-constructor.styles';

const ItemConstructor = ({ currentUser, colors, prints, activePrint, activeColor, ...props }) => {
    activeColor = activeColor == null ? colors && colors[0] : activeColor;
    activePrint = activePrint == null ? prints && prints[0] : activePrint;
    const canvasRef = useRef();
    useEffect(() => {
        ColorsDocument().then((res) => {
            let docs = res.docs.map((i) => {
                return {
                    id: i.id,
                    url: i.data().url
                }
            })
            props.setColors(docs);
        })
        PrintsDocument().then((res) => {
            let docs = res.docs.map((i) => {
                return {
                    id: i.id,
                    url: i.data().url
                }
            })
            props.setPrints(docs);
        })
    }, []);
    const colorClickHandle = (item) => (e) => {
        if (item.id === activeColor.id) return;
        props.setActiveColors(item);
    };
    const printClickHandle = (item) => (e) => {
        if (item.id === activePrint.id) return;
        props.setActivePrint(item);
    };
    const Order = async (e) => {
        const screenshot = await html2canvas(canvasRef.current);
        const order = {
            screenshot: screenshot.toDataURL(),
            activeColor,
            activePrint,
            time: (+ new Date()),
            user: {
                id: currentUser.id,
                email: currentUser.email,
                displayName: currentUser.displayName
            }
        }
        let confirmation = window.confirm("Confirm Order");
        confirmation && submitOrder(order);
    }

    return (
        <ConstructorArea>
            <RenderArea>
                {activeColor && activePrint ? <>
                    <RenderWrapper>
                        <Canvas ref={canvasRef} url={require(`../../assets/colors/${activeColor.url}`)}>
                            <ImageCanvas url={require(`../../assets/prints/${activePrint.url}`)}></ImageCanvas>
                        </Canvas>
                    </RenderWrapper>
                </>
                    : <div>Loading...</div>
                }
            </RenderArea>
            <ControllWrapper>
                <Controll title={"Colors:"} items={colors} activeItem={activeColor} baseUrl={'assets/colors/'} handleClick={colorClickHandle} />
                <Controll title={"Prints:"} items={prints} activeItem={activePrint} baseUrl={'assets/prints/'} handleClick={printClickHandle} />
                <PushDown>
                    <CustomButton onClick={Order}> Order </CustomButton>
                </PushDown>
            </ControllWrapper>
        </ConstructorArea >
    );
}

const mapStateToProps = props => ({
    colors: props.colors.colors,
    activeColor: props.colors.activeColor,
    prints: props.prints.prints,
    activePrint: props.prints.activePrint,
    currentUser: props.user.currentUser
});
const mapDispatchToProps = dispatch => ({
    setColors: (colors) => { dispatch(setColors(colors)) },
    setActiveColors: (item) => { dispatch(setActiveColor(item)) },
    setPrints: (prints) => { dispatch(setPrints(prints)) },
    setActivePrint: (item) => { dispatch(setActivePrint(item)) }
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemConstructor);