import React, { useState } from "react";
import "./stepper.css";
import { stepformData } from "./utils/utils";

interface StepperProps {
  handleChildSteps: any;
  step: number;
}

const Stepper: React.FC<StepperProps> = (props) => {
  const { handleChildSteps, step } = props;

  const handleClick = (id: string) => {
    // if (step > Number(id)) 
    handleChildSteps(id);
  };

  return (
    <div className="stepper-wrapper">
      {stepformData.map((stepsData, index) => {
        return (
          <div
            key={stepsData}
            className={
              step >= index + 1
                ? "stepper-item completed active"
                : "stepper-item"
            }
          >
            <span
              className="step-counter"
              id={stepsData}
              onClick={(id) => handleClick(stepsData)}
            >
              {stepsData}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
