import React from 'react';
import styled from 'styled-components';

const FlexLayout = styled((props) => {
	return (
		<div className={props.className}>
			{props.children}
		</div>
	);
})`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	flex-direction : column;
	background-color: #2ecc71;
`;

export default FlexLayout;