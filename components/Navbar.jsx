import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "auth/AuthContext";
import { Text } from "./Text";

const NavContainer = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	background: #ea454c;
	justify-content: space-between;
`;

function Navbar() {
	// const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const router = useRouter();
	const route = router.pathname.split("/");
	const { user, logout } = useAuth();
	// consol;
	return (
		<NavContainer>
			<Text color="#fff" pad="10px" size="40px">
				Firext
			</Text>
			{!user ? (
				route[1] === "" ? (
					<Link href="/signup">
						<Text color="#fff" pad="10px" size="20px" cursor="pointer">
							Signup
						</Text>
					</Link>
				) : (
					<Link href="/">
						<Text color="#fff" pad="10px" size="20px" cursor="pointer">
							Login
						</Text>
					</Link>
				)
			) : (
				<Text
					color="#fff"
					pad="10px"
					size="20px"
					cursor="pointer"
					onClick={() => {
						logout(), router.push("/");
					}}
				>
					Logout
				</Text>
			)}
		</NavContainer>
	);
}
export default Navbar;
