import * as React from "react";
import {
  FirstPage,
  FirstThree,
  LastPage,
  LastThree,
  MiddlePage,
  SpacerInput,
} from "./fragments";

/**
 * AtFirstThreeComponent
 *
 * FirstThree | SpacerInput | LastPage
 * */
export const AtFirstThreeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <FirstThree />
      <SpacerInput />
      <LastPage />
    </React.Fragment>
  );
};

/**
 * AtWithinComponent
 *
 * FirstPage | SpacerInput | MiddlePage | SpacerInput | LastPage
 * */
export const AtWithinComponent: React.FC = () => {
  return (
    <React.Fragment>
      <FirstPage />
      <SpacerInput />
      <MiddlePage />
      <SpacerInput />
      <LastPage />
    </React.Fragment>
  );
};

/**
 * AtLastThreeComponent
 *
 * FirstPage | SpacerInput | LastThree
 * */
export const AtLastThreeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <FirstPage />
      <SpacerInput />
      <LastThree />
    </React.Fragment>
  );
};
