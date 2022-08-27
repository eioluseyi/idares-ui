import * as React from "react";
import { useContext } from "react";
import { MainContext } from "../../utils/context";
import { MainContextType } from "../../utils/types";
import { NextButton, PreviousButton } from "./fragments";
import {
  AtFirstThreeComponent,
  AtLastThreeComponent,
  AtWithinComponent,
} from "./states";

/**
 * Pagination full mode
 *
 * STATES (Page Position)
 *
 * - AtFirstThree => 1 | 2 | 3
 * - AtWithin => FirstThree < PAGE < LastThree
 * - AtLastThree => numberOfPages - 2 | numberOfPages - 1 | numberOfPages
 *
 * @returns Full Pagination Component
 */

export const FullMode: React.FC = () => {
  const { numberOfPages, page } = useContext<MainContextType>(MainContext);

  const AtFirstThree: boolean = page <= 3;
  const AtWithin: boolean = page >= 4 && page < numberOfPages - 2;
  const AtLastThree: boolean = page >= numberOfPages - 2;

  const renderState = () => {
    if (AtFirstThree) return <AtFirstThreeComponent />;
    if (AtWithin) return <AtWithinComponent />;
    if (AtLastThree) return <AtLastThreeComponent />;
    return <></>;
  };

  return (
    <React.Fragment>
      <PreviousButton />
      {renderState()}
      <NextButton />
    </React.Fragment>
  );
};
