import styled from "styled-components";

const Button = styled.button`
	background: ${(props) => (props?.fill ? props.fill : "transparent")};
	box-shadow: ${(props) =>
		props?.shadow && "0px 4px 10px rgba(233, 68, 75, 0.25)"};
	border-radius: 12px;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border: ${(props) => (props?.border ? props.border : "none")};
	padding: 10px;
`;

export { Button };
