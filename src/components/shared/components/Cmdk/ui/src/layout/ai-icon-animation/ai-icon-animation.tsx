"use client";

// make a function that returns a component

import clsx from "clsx";
import { useEffect, useState } from "react";

import { aiIconStyles } from "./styles";

interface Props {
  loading?: boolean;
  className?: string;
  allowHoverEffect?: boolean;
}

const AiIconAnimation = ({ loading = false, className, allowHoverEffect = false }: Props) => {
  const [step, setStep] = useState(1);
  const [exitStep, setExitStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading) {
        setIsAnimating(true);
        setStep((step) => {
          return (step % 5) + 1;
        });
        setExitStep((step) => {
          return (step % 5) + 1;
        });
      }
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      setStep(1);
    }
  }, [loading]);

  return (
    <div
      className={clsx(
        aiIconStyles["ai-icon__container"],
        allowHoverEffect && aiIconStyles["ai-icon__container--allow-hover-effect"],
        loading && isAnimating && aiIconStyles["spin-ai-icon-container"],
        className
      )}
    >
      <div className={clsx(aiIconStyles["ai-icon__grid"])}>
        <div
          className={clsx(
            aiIconStyles["ai-icon__grid__square"],
            loading
              ? aiIconStyles[`ai-icon__grid__square--step-${step}`]
              : isAnimating
              ? aiIconStyles[`ai-icon__grid__square--exiting--step-${exitStep}`]
              : aiIconStyles[`ai-icon__grid__square--static`]
          )}
        ></div>
        <div
          className={clsx(
            aiIconStyles["ai-icon__grid__square"],
            loading
              ? aiIconStyles[`ai-icon__grid__square--step-${step}`]
              : isAnimating
              ? aiIconStyles[`ai-icon__grid__square--exiting--step-${exitStep}`]
              : aiIconStyles[`ai-icon__grid__square--static`]
          )}
        ></div>
        <div
          className={clsx(
            aiIconStyles["ai-icon__grid__square"],
            loading
              ? aiIconStyles[`ai-icon__grid__square--step-${step}`]
              : isAnimating
              ? aiIconStyles[`ai-icon__grid__square--exiting--step-${exitStep}`]
              : aiIconStyles[`ai-icon__grid__square--static`]
          )}
        ></div>
        <div
          className={clsx(
            aiIconStyles["ai-icon__grid__square"],
            loading
              ? aiIconStyles[`ai-icon__grid__square--step-${step}`]
              : isAnimating
              ? aiIconStyles[`ai-icon__grid__square--exiting--step-${exitStep}`]
              : aiIconStyles[`ai-icon__grid__square--static`]
          )}
        ></div>
      </div>
    </div>
  );
};

export { AiIconAnimation };
