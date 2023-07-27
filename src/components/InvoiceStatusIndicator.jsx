import React from "react";
import { styled } from "goober";
import { minMobile } from "../../globalStyle.jsx";

const StatusIndicator = ({ status }) => {
  const statusColors = {
    pending: {
      background: "rgba(255, 145, 0, 0.06)",
      textColor: "#ff9100",
    },
    paid: {
      background: "rgba(51, 215, 160, 0.06)",
      textColor: "#33d7a0",
    },
    overdue: {
      background: "rgba(231, 76, 60, 0.1)",
      textColor: "#e74c3c",
    },
    draft: {
      background: "rgba(224, 228, 251, 0.1)",
      textColor: "#e0e4fb",
    },
  };

  const { background, textColor } = statusColors[status?.toLowerCase()] || {
    background: "rgba(224, 228, 251, 0.1)",
    textColor: "#fff",
  };

  const StyledStatusDiv = styled("div")`
    width: 6.5rem;
    height: 2.5rem;
    background: ${background};
    color: ${textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: var(--br-sm);
    font-weight: bold;
    font-size: 0.75rem;
    padding: 0.75rem 0;
    align-self: center;
    font-weight: 700;
    span {
      min-width: 0.625rem;
      min-height: 0.625rem;
      border-radius: 50%;
      background: ${textColor};
    }
    ${minMobile} {
      font-size: 0.875rem;
    }
  `;
  return (
    <StyledStatusDiv>
      <span></span>
      {status && status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
    </StyledStatusDiv>
  );
};

export default StatusIndicator;
