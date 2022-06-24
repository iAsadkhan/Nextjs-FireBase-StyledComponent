import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/Link";

const NavContainer = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	background: #ea454c;
	justify-content: space-between;
`;
const Text = styled.p`
	font-size: 40px;
	color: #fff;
	padding: 10px;
	cursor: pointer;
`;

function Navbar() {
	// const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const router = useRouter();
	const route = router.pathname.split("/");
	// consol;
	return (
		<NavContainer>
			<Text>Firext</Text>
			{route[1] === "" ? (
				<Link href="/signup">
					<Text>Signup</Text>
				</Link>
			) : (
				<Link href="/">
					<Text>Login</Text>
				</Link>
			)}
		</NavContainer>
	);
}
export default Navbar;
