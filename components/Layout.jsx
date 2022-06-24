import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

function Layout({ children, ...props }) {
	return (
		<LayoutContainer>
			<Navbar />
			{children}
		</LayoutContainer>
	);
}

export default Layout;
