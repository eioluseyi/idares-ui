import Pagination from "../../ui-components/pagination";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TemplateComponent } from "./common/TemplateComponent";

export default {
	title: "PAGINATION/Full",
	component: Pagination,
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as ComponentMeta<typeof Pagination>;

export const Minimum: ComponentStory<typeof Pagination> =
	TemplateComponent.bind({});
export const OneThousandPages: ComponentStory<typeof Pagination> =
	TemplateComponent.bind({});

Minimum.args = {
	count: 70,
	perPage: 10
};

OneThousandPages.args = {
	count: 10000,
	perPage: 10
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
