import * as React from "react";
import { NAVIGATION_BUTTON_TYPES } from "../utils/enum";
import { ArrowButtonPropsType } from "../utils/types";
import { ReactComponent as ArrowDown } from "../assets/arrow.svg";
import styled from "styled-components";

const ArrowButton: React.FC<ArrowButtonPropsType> = ({ type }) => (
	<Container>
		<React.Fragment>
			{type === NAVIGATION_BUTTON_TYPES.PREVIOUS && (
				<ArrowDown className="arrow previous" />
			)}
			{type === NAVIGATION_BUTTON_TYPES.NEXT && (
				<ArrowDown className="arrow next" />
			)}
		</React.Fragment>
	</Container>
);

export default ArrowButton;

const Container = styled.div`
	display: grid;
	place-items: center;

	.arrow {
		width: 0.8em;

		&.previous {
			transform: rotate(90deg);
		}

		&.next {
			transform: rotate(-90deg);
		}
	}

	&:hover {
		.arrow {
			fill: var(--color-primary);
			transition: fill 0s ease-in-out;
		}
	}
`;
