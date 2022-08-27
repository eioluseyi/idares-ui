type SizeTypes =
  | `${string}${"px"}`
  | `${string}${"pt"}`
  | `${string}${"pc"}`
  | `${string}${"ex"}`
  | `${string}${"ch"}`
  | `${string}${"em"}`
  | `${string}${"rem"}`
  | `${string}${"mm"}`
  | `${string}${"cm"}`
  | `${string}${"in"}`
  | `${string}${"%"}`
  | `${string}${"vw"}`
  | `${string}${"vh"}`
  | `${string}${"vmin"}`
  | `${string}${"vmax"}`;

export type DefaultSizeTypes = "xs" | "sm" | "md" | "lg" | "xl";

export type SizeOptions = DefaultSizeTypes | SizeTypes;

export interface PaginationButtonProps {
  active?: boolean;
  title?: number;
  value?: number;
  clickInput?: boolean;
  children?: JSX.Element;
}

export type PaginationIndexProps = JSX.IntrinsicAttributes & {
  page?: number;
  perPage?: number | typeof NaN;
  count?: number;
  setPage?: (value: number) => void;
  baseSize?: SizeOptions;
  baseColor?: string;
};

export type NavigationButtonProps = {
  type: string;
};

export interface SanitizeValueInterface {
  (val: number): number;
}

export type MainContextType = {
  numberOfPages: number;
  page: number;
  setPage: (value: number) => void;
};

export type ArrowButtonPropsType = {
  type: string;
};

export type ThemeType = {
  colors: {
    white: string;
    black: string;
    primary: string;
    [key: string]: string;
  };
  sizes: {
    [key in SizeOptions]: SizeTypes;
  };
};
