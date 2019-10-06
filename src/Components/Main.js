import React from 'react';
import FlexLayout from './FlexLayout'
import styled from 'styled-components'
import device from './device'

const Main = () => {
	return (
		<div>
			<FlexLayout>
				<Header><h1>Header</h1></Header>
				<Center>
					<Label order="1" shrink="2">TEST1</Label>
					<Label order="2" shrink="2">TEST2</Label>
					<Label order="3" shrink="2">TEST3</Label>
				</Center>
				<Bottom>
					<Button>TEST</Button>
					<h1>Bottom</h1>
				</Bottom>
			</FlexLayout>
		</div>
	);
};

const Button = styled.button`
	border-radius: 5px;
	font-size : 20px;
	font-weight: 600;
	padding : 10px;
	margin : 10px;
	width : 50vw;
`;

const Label = styled.div`
	font-size : 25px;
	font-weight : 600;
	margin : 10px;
	padding : 10px;
	background-color: #34495e;
	text-align : center;
	flex-basis: 400px;
	order : ${({order}) => order}
	flex-grow : ${({grow=0})=>grow}
	flex-shrink: ${({shrink=0})=>shrink}
	flex-basis: ${({basis})=>basis}
`;
const Header = styled.div`
	height: 20%;
	background-color: #e67e22;
	display : flex;
	flex-direction: row;
	justify-content:center;
	align-items: center;

	@media ${device.laptop} {
    	justify-content: flex-start;
  	}
`;
const Center = styled.div`
	background-color : red;
	height: 60%;
	display: flex;
	justify-content: center;
	align-items : center;
	flex-flow : nowrap row;
`;

const Bottom = styled.div`
	height : 20%;
	background-color: #8e44ad;
	display : flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
`;

export default Main;