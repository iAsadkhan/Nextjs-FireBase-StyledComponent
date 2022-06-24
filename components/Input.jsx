import styled from "styled-components";

const Input = styled.input`
	border: 1px solid rgba(0, 0, 0, 0.25);
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
	border-radius: 12px;
	width: ${(props) => (props?.width ? props.width : "100%")};
	padding: 10px 10px;
	background: transparent;
	outline: none;
`;

export { Input };
