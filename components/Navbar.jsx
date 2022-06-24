import styled from "styled-components";
import React from "react";

const NavContainer = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	background: #ea454c;
`;
const Text = styled.p`
	font-size: 40px;
	color: #fff;
	padding: 10px;
`;

function Navbar() {
	return (
		<NavContainer>
			<Text>Firext</Text>
		</NavContainer>
	);
}
export default Navbar;
