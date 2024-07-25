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
  background-color: white;
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

export const LoadingDots: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DotsContainer className={className}>
      <Dot1 />
      <Dot2 />
      <Dot3 />
    </DotsContainer>
  );
};
