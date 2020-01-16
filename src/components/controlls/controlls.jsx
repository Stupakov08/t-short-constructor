import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ColorsDocument, PrintsDocument } from '../../firebase/firebase.utils';
import { setColors, setActiveColor } from '../../redux/colors/colors.actions';
import { setPrints, setActivePrint } from '../../redux/prints/prints.actions';
import Controll from '../controll/controll';

const Controlls = ({
	colors,
	prints,
	activePrint,
	activeColor,
	setPrints,
	setColors,
	...props
}) => {
	activeColor = activeColor == null ? colors && colors[0] : activeColor;
	activePrint = activePrint == null ? prints && prints[0] : activePrint;
	useEffect(() => {
		ColorsDocument().then(res => {
			let docs = res.docs.map(i => {
				return {
					id: i.id,
					url: i.data().url
				};
			});
			setColors(docs);
		});
		PrintsDocument().then(res => {
			let docs = res.docs.map(i => {
				return {
					id: i.id,
					url: i.data().url
				};
			});
			setPrints(docs);
		});
	}, [setColors, setPrints]);
	
	const colorClickHandle = item => e => {
		if (item.id === activeColor.id) return;
		props.setActiveColors(item);
	};
	const printClickHandle = item => e => {
		if (item.id === activePrint.id) return;
		props.setActivePrint(item);
	};

	return (
		<>
			<Controll
				title={'Colors:'}
				items={colors}
				activeItem={activeColor}
				baseUrl={'assets/colors/'}
				handleClick={colorClickHandle}
			/>
			<Controll
				title={'Prints:'}
				items={prints}
				activeItem={activePrint}
				baseUrl={'assets/prints/'}
				handleClick={printClickHandle}
			/>
		</>
	);
};

const mapStateToProps = props => ({
	colors: props.colors.colors,
	activeColor: props.colors.activeColor,
	prints: props.prints.prints,
	activePrint: props.prints.activePrint
});
const mapDispatchToProps = dispatch => ({
	setColors: colors => {
		dispatch(setColors(colors));
	},
	setActiveColors: item => {
		dispatch(setActiveColor(item));
	},
	setPrints: prints => {
		dispatch(setPrints(prints));
	},
	setActivePrint: item => {
		dispatch(setActivePrint(item));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Controlls);
