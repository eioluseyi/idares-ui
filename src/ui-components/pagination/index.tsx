import * as React from "react";
import styled from "styled-components";
import { FullMode } from "./components/FullMode";
import SimpleMode from "./components/SimpleMode";
import { MainContext } from "./utils/context";
import { SIMPLE_MODE_THRESHOLD } from "./utils/enum";
import { theme } from "./utils/theme";
import { PaginationIndexProps, SizeOptions } from "./utils/types";

/**
 * Pagination
 */

const Pagination: React.FC<PaginationIndexProps> = ({
  page = 1,
  perPage = 10,
  count = 60,
  setPage = () => {},
  baseSize = "xl",
  baseColor,
}) => {
  const numberOfPages: number = Math.ceil(count / perPage);

  const showFullMode: boolean = numberOfPages > SIMPLE_MODE_THRESHOLD;

  if (numberOfPages <= 1) return null;

  return (
    <MainContext.Provider value={{ numberOfPages, page, setPage }}>
      <PaginationWrapper
        role="group"
        aria-label="Pagination"
        {...{ baseColor, baseSize }}
      >
        {!showFullMode && <SimpleMode />}
        {showFullMode && <FullMode />}
      </PaginationWrapper>
    </MainContext.Provider>
  );
};

export default Pagination;

const PaginationWrapper = styled.div<{
  baseSize: SizeOptions;
  baseColor?: string;
}>`
  --color-primary: ${({ baseColor }) => baseColor ?? theme.colors.primary};
  --color-white: ${theme.colors.white};
  --color-black: ${theme.colors.black};
  --color-grey: ${theme.colors.grey};

  flex: 1;
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ baseSize }) => theme.sizes[baseSize] ?? baseSize};
  font-weight: 300;
  column-gap: 1em;

  .arrow {
    fill: var(--color-grey);
    transition: fill 0.2s ease-in-out;

    &.left {
      transform: rotateZ(90deg);
    }
    &.right {
      transform: rotateZ(-90deg);
    }
  }
`;
