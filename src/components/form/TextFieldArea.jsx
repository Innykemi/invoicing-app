import React from "react";
import { styled } from "goober";

export const Wrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  label {
    color: var(--light);
    font-size: 0.75rem;
  }
  textarea {
    width: 100%;
    padding: 1rem 0.75rem 1rem 1.25rem;
    border-radius: 4px;
    background: #0a253c;
    color: var(--light);
    font-family: var(--semi-bold);
    font-weight: 700;
    font-size: 0.75rem;
    border: 1px solid #1b385e;
    outline: none;
    transition: border 400ms ease-in-out, background-color 400ms ease-in-out,
      color 400ms ease-in-out;
    -webkit-appearance: none;
    &::placeholder {
      font-family: inherit;
      color: #62839b;
    }
    &:focus {
      border: 1px solid var(--light);
    }
  }
  .error {
    border: 1px solid red;
  }
  .text-input {
    width: 100%;
    height: 4rem;
  }
`;

const TextFieldArea = ({ label, className, ...props }) => {
  return (
    <Wrapper className={className}>
      <label className="type-body3" htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-input" {...props} />
    </Wrapper>
  );
};

export default TextFieldArea;
