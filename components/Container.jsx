import styled from "styled-components";

const ContainerFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 100px);
	gap: 10px;
	background: #fff;
`;

const ContainerCenter = styled.div`
	display: flex;
	height: calc(100vh - 150px);
	width: 100%;
	max-width: 1088px;
	gap: 10px;
	background: #f8f8f8;
`;
const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 10px;
	background-image: ${(props) => (props?.bg ? `url(${props.bg})` : "none")};
	background-repeat: no-repeat;
	background-size: cover;
`;

const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props?.direction ? props.direction : "column")};
	justify-content: ${(props) => props?.justify && props.justify};
	align-items: ${(props) => props?.align && props.align};
	width: ${(props) => (props?.width ? props.width : "314px")};
	padding: ${(props) => props?.pad && props.pad};
	margin: ${(props) => props?.margin && props.margin};
`;

export { ContainerFlex, ContainerCenter, ContainerContent, Container };
