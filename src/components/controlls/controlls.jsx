import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	ColorsDocument,
	PrintsDocument,
	SizesDocument
} from '../../firebase/firebase.utils';
import { setColors, setActiveColor } from '../../redux/colors/colors.actions';
import { setPrints, setActivePrint } from '../../redux/prints/prints.actions';
import { setSizes, setActiveSize } from '../../redux/size/sizes.actions';
import Controll from '../controll/controll';

const Controlls = ({
	colors,
	prints,
	sizes,
	activePrint,
	activeColor,
	activeSize,
	setPrints,
	setColors,
	setSizes,
	...props
}) => {
	useEffect(() => {
		ColorsDocument().then(res => {
			let docs = res.docs.map(i => {
				return {
					id: i.id,
					url: i.data().url,
					name: i.data().name
				};
			});
			setColors(docs);
		});
		PrintsDocument().then(res => {
			let docs = res.docs.map(i => {
				return {
					id: i.id,
					url: i.data().url,
					name: i.data().name
				};
			});
			setPrints(docs);
		});
		SizesDocument().then(res => {
			let docs = res.docs.map(i => {
				return {
					id: i.id,
					name: i.data().name
				};
			});
			setSizes(docs);
		});
	}, [setColors, setPrints, setSizes]);

	const colorClickHandle = item => e => {
		if (item.id === activeColor.id) return;
		props.setActiveColors(item);
	};
	const printClickHandle = item => e => {
		if (item.id === activePrint.id) return;
		props.setActivePrint(item);
	};
	const sizeClickHandle = item => e => {
		if (item.id === activeSize.id) return;
		props.setActiveSize(item);
	};
	return (
		<>
			<Controll
				title={'Colors:'}
				items={colors}
				activeItem={activeColor}
				baseUrl={'assets/colors/'}
				handleClick={colorClickHandle}
				displayNameAsTitle={true}
			/>
			<Controll
				title={'Sizes:'}
				items={sizes}
				activeItem={activeSize}
				handleClick={sizeClickHandle}
				displayNameAsTitle={false}
			/>
			<Controll
				title={'Prints:'}
				items={prints}
				activeItem={activePrint}
				baseUrl={'assets/prints/'}
				handleClick={printClickHandle}
				displayNameAsTitle={true}
			/>
		</>
	);
};

const mapStateToProps = props => ({
	colors: props.colors.colors,
	activeColor: props.colors.activeColor,
	prints: props.prints.prints,
	activePrint: props.prints.activePrint,
	sizes: props.sizes.sizes,
	activeSize: props.sizes.activeSize
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
	},
	setSizes: sizes => {
		dispatch(setSizes(sizes));
	},
	setActiveSize: item => {
		dispatch(setActiveSize(item));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Controlls);
