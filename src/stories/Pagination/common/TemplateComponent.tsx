import * as React from "react";
import Pagination from "../../../ui-components/pagination";

export const TemplateComponent = (
	args: JSX.IntrinsicAttributes & {
		page?: number;
		perPage?: number;
		count?: number;
	}
) => {
	const [page, setPage] = React.useState<number>(args.page);

	React.useEffect(() => setPage(args.page ?? 1), [args.page]);

	return (
		<>
			<Pagination {...args} {...{ page, setPage }} />
			<div>
				<br />
				<strong>Page: {page}</strong>
			</div>
		</>
	);
};
