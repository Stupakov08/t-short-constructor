import React from 'react';
import {
	Controll,
	ControllTitle,
	ControllVariants,
	ControllVariant
} from './controll.styles';

const ConstructorControll = ({
	title,
	items,
	activeItem,
	baseUrl,
	handleClick,
	displayNameAsTitle
}) => {
	const imgUrl = item => {
		let url = null;
		try {
			url = require('../../' + baseUrl + item.url);
		} catch {}
		return url;
	};
	return (
		<Controll>
			<ControllTitle>{title}</ControllTitle>
			<ControllVariants>
				{activeItem &&
					items &&
					items.map(item => (
						<ControllVariant
							url={baseUrl && item.url && imgUrl(item)}
							active={item.id === activeItem.id}
							onClick={handleClick(item)}
							key={item.id}
							title={item.name}
						>
							{!displayNameAsTitle && item.name}
						</ControllVariant>
					))}
			</ControllVariants>
		</Controll>
	);
};

export default ConstructorControll;
