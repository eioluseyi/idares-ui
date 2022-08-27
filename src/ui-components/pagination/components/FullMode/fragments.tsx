import * as React from "react";
import { MainContext } from "../../utils/context";
import { NAVIGATION_BUTTON_TYPES } from "../../utils/enum";
import { MainContextType, NavigationButtonProps } from "../../utils/types";
import ArrowButton from "../ArrowButton";
import PaginationButton from "../PaginationButton";

const NavigationButton: React.FC<NavigationButtonProps> = ({ type }) => {
	const { numberOfPages, page } =
		React.useContext<MainContextType>(MainContext);

	const computeProps: () => object = () => {
		switch (type) {
			case NAVIGATION_BUTTON_TYPES.PREVIOUS:
				return {
					value: page > 1 ? page - 1 : page,
					"aria-label": "Previous page"
				};

			case NAVIGATION_BUTTON_TYPES.NEXT:
				return {
					value: page < numberOfPages ? page + 1 : page,
					"aria-label": "Next page"
				};

			default:
				return {
					value: page,
					"aria-label": `Page ${page}`
				};
		}
	};

	return (
		<PaginationButton {...computeProps()}>
			<ArrowButton type={type} />
		</PaginationButton>
	);
};

export const PreviousButton: React.FC = () => (
	<NavigationButton type={NAVIGATION_BUTTON_TYPES.PREVIOUS} />
);

export const NextButton: React.FC = () => (
	<NavigationButton type={NAVIGATION_BUTTON_TYPES.NEXT} />
);

export const FirstPage: React.FC = () => {
	const { page } = React.useContext<MainContextType>(MainContext);

	return (
		<PaginationButton
			active={page === 1}
			title={1}
			value={1}
			aria-label="First page"
		/>
	);
};

export const MiddlePage: React.FC = () => {
	const { page } = React.useContext<MainContextType>(MainContext);

	return (
		<PaginationButton
			active={true}
			title={page}
			value={page}
			aria-label={`Page ${page}`}
		/>
	);
};

export const LastPage: React.FC = () => {
	const { numberOfPages, page } =
		React.useContext<MainContextType>(MainContext);

	return (
		<PaginationButton
			active={numberOfPages === page}
			title={numberOfPages}
			value={numberOfPages}
			aria-label="Last page">
			{numberOfPages > 99 ? <>99+</> : undefined}
		</PaginationButton>
	);
};

export const FirstThree: React.FC = () => {
	const { page } = React.useContext<MainContextType>(MainContext);

	return (
		<React.Fragment>
			{new Array(3).fill(1).map((_, i) => {
				const itemValue: number = i + 1;
				const isActive = itemValue === page;

				return (
					<PaginationButton
						key={itemValue}
						active={itemValue === page}
						title={itemValue}
						value={itemValue}
						aria-label={`Page ${itemValue}${isActive ? ", current page" : ""}`}
					/>
				);
			})}
		</React.Fragment>
	);
};

export const LastThree: React.FC = () => {
	const { numberOfPages, page } =
		React.useContext<MainContextType>(MainContext);

	return (
		<React.Fragment>
			{new Array(3)
				.fill(1)
				.map((_, i) => {
					const itemValue: number = numberOfPages - i;
					const isActive = itemValue === page;

					return (
						<PaginationButton
							key={i}
							active={isActive}
							title={itemValue}
							value={itemValue}
							aria-label={`Page ${itemValue}${
								isActive ? ", current page" : ""
							}`}
						/>
					);
				})
				.reverse()}
		</React.Fragment>
	);
};

export const SpacerInput: React.FC = () => (
	<PaginationButton clickInput={true} aria-label="Input page number">
		{<>...</>}
	</PaginationButton>
);
