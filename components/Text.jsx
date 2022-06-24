import styled from "styled-components";

const Text = styled.p`
	font-size: ${(props) => (props?.size ? props.size : "14px")};
	font-weight: ${(props) => props?.weight && props.weight};
	padding: ${(props) => (props?.pad ? props.pad : "0")};
	margin: ${(props) => (props?.margin ? props.margin : "0")};
	color: ${(props) => (props?.color ? props.color : "#000")};
	text-align: ${(props) => props?.align && props.align};
	letter-spacing: 0.03rem;
`;
export { Text };
