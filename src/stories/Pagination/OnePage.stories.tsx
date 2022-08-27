import Pagination from "../../ui-components/pagination";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TemplateComponent } from "./common/TemplateComponent";

export default {
  title: "PAGINATION",
  component: Pagination,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Pagination>;

export const OnePage: ComponentStory<typeof Pagination> =
  TemplateComponent.bind({});

OnePage.args = {
  count: 1,
  perPage: 10,
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
