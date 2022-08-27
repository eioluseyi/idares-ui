import * as React from "react";
import styled from "styled-components";
import { MainContext } from "../utils/context";
import {
  MainContextType,
  PaginationButtonProps,
  SanitizeValueInterface,
} from "../utils/types";

const PaginationButton: React.FC<PaginationButtonProps> = ({
  active,
  title,
  value,
  clickInput,
  children,
  ...htmlProps
}) => {
  const { numberOfPages, page, setPage } =
    React.useContext<MainContextType>(MainContext);

  const [showInput, setShowInput] = React.useState<boolean>(false);
  const pageInput = React.useRef<HTMLInputElement | null>(null);

  const sanitizeValue: SanitizeValueInterface = (val) => {
    if (isNaN(val)) return page;
    if (val < 1) return 1;
    if (val > numberOfPages) return numberOfPages;
    return val;
  };

  const focusPage: (pageNumber: number) => void = (pageNumber) => {
    pageNumber;
  };

  return (
    <Container
      className={`page-item${active ? " active" : ""}`}
      {...htmlProps}
      onClick={() => {
        (value || value === 0) && setPage(value);
        clickInput && setShowInput(true);
      }}
    >
      {showInput ? (
        <input
          className="page-input"
          enterKeyHint="go"
          autoFocus
          ref={pageInput}
          onBlur={() => setTimeout(() => setShowInput(false), 200)}
          onKeyPress={(e) => {
            // Check for Enter key
            if (e.key === "Enter") {
              const newPage = sanitizeValue(
                parseInt(pageInput.current?.value || "")
              );
              setPage(newPage);
              focusPage(newPage);
              setShowInput(false);
            }
          }}
        />
      ) : (
        children ?? title
      )}
    </Container>
  );
};

export default PaginationButton;

const Container = styled.button`
  background-color: transparent;
  border: 0.05em solid var(--color-grey);
  border-radius: 0.35em;
  height: 2.4em;
  width: 2.4em;
  cursor: pointer;
  user-select: none;
  line-height: 0;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: 0.05em solid var(--color-primary);

    svg {
      fill: var(--color-primary);
    }

    &.active {
      border: 0.05em solid var(--color-grey);
      color: var(--color-white);
    }
  }

  &.active {
    font-weight: 700;
    color: var(--color-white);
    background-color: var(--color-primary);
    border: 0.05em solid var(--color-primary);
    transition-duration: 0s;
  }

  &:not(.active):hover {
    border-color: var(--color-primary);
    transition: border-color 0s ease-in-out;
  }

  .page-input {
    outline: none;
    border: none;
    padding: 0.05em;
    font-size: 0.7em;
    width: 1.5em;
    height: 1.5em;
    color: var(--color-grey);
    background: transparent;
    text-align: center;
  }
`;
