import styled from "styled-components";

export const Container = styled.button`
	background: ${(props) => props.color};
	color: white;
	width: 3.125rem;
	height: 3.125rem;
	
	border-radius: 50%;
	font-weight: bold;
	margin: 0.375rem;
	font-size: 20px;

	cursor: pointer;
	border: none;

	transition: all 0.2s ease-in-out;

	&:hover {
		opacity: 0.7;
	}

	@media (max-width: 767px) {
		width: 42px;
		height: 42px;

		font-size: 18px;
	}
`;
