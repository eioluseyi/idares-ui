import Pagination from "../../ui-components/pagination";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TemplateComponent } from "./common/TemplateComponent";

export default {
  title: "PAGINATION/Edge Cases",
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

export const Empty: ComponentStory<typeof Pagination> = TemplateComponent.bind(
  {}
);
export const Overflow: ComponentStory<typeof Pagination> =
  TemplateComponent.bind({});

Empty.args = {
  count: 0,
  perPage: 10,
};

Overflow.args = {
  count: 1000000000,
  perPage: 10,
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
