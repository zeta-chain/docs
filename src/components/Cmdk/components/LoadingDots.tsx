/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const jump = keyframes`
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  animation: ${jump} 1.35s infinite;
`;

const Dot1 = styled(Dot)`
  animation-delay: 0s;
`;

const Dot2 = styled(Dot)`
  animation-delay: 0.2s;
`;

const Dot3 = styled(Dot)`
  animation-delay: 0.4s;
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const dots = [
  { key: "1", DotComponent: Dot1 },
  { key: "2", DotComponent: Dot2 },
  { key: "3", DotComponent: Dot3 },
];

export const LoadingDots: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DotsContainer className={className}>
      {dots.map(({ DotComponent, key }) => (
        <DotComponent key={key} className="dark:bg-white bg-black" />
      ))}
    </DotsContainer>
  );
};
