import Pagination from "../../ui-components/pagination";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TemplateComponent } from "./common/TemplateComponent";

export default {
  title: "PAGINATION/Simple",
  component: Pagination,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Pagination>;

export const TwoPages: ComponentStory<typeof Pagination> =
  TemplateComponent.bind({});
export const SixPages: ComponentStory<typeof Pagination> =
  TemplateComponent.bind({});

TwoPages.args = {
  count: 20,
  perPage: 10,
};

SixPages.args = {
  count: 60,
  perPage: 10,
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
