import React from "react";
import { styled } from "goober";

const buttonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--button-bg-color);
  color: var(--button-text-color);
  border-radius: var(--br-lg);
  text-align: center;
  outline: none;
  font-family: var(--semi-bold);
  font-weight: 700;
  cursor: pointer;
  white-space: wrap;
  width: auto;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button = ({ leftIcon, textcolor, bg, children, className="", onClick, type="button", disabled }) => {
  const customStyles = `
    --button-bg-color: ${bg};
    --button-text-color: ${textcolor};
  `;
  const StyledButton = styled("button")`
    ${buttonStyles}
    ${customStyles}
  `;

  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      className={`${className} ${disabled ? "disabled" : ""}`}
      onClick={handleClick} 
      type={type}
    >
      {leftIcon && leftIcon}
      {children}
    </StyledButton>
  );
};

export default Button;
