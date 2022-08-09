import * as React from "react";
import { useContext } from "react";
import { MainContext } from "../utils/context";
import { MainContextType } from "../utils/types";
import PaginationButton from "./PaginationButton";

/**
 * Pagination Simple mode
 *
 * @returns Simple Pagination Component
 */

const SimpleMode: React.FC = () => {
	const { numberOfPages, page } = useContext<MainContextType>(MainContext);

	return (
		<>
			{new Array(numberOfPages).fill(1).map((_, i) => {
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
		</>
	);
};

export default SimpleMode;
