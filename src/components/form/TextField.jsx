import React from "react";
import { styled } from "goober";
import Calendar from "../../assets/images/Calendar.jsx";

export const Wrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  label {
    color: var(--light);
    font-size: 0.75rem;
    @media screen and (min-width: 768px) {
      display: ${props => (props.hidelabelondesktop ? "none" : "block")};
    }
  }
  input {
    min-width: 10.9375rem;
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
    &[type="date"]::-webkit-calendar-picker-indicator {
      opacity: 0;
      cursor: pointer;
      transform: translateX(23px);
      z-index: 5;
      margin-right: 1.4rem;
    }
    &[type="date"]:in-range::-webkit-datetime-edit-year-field,
    &[type="date"]:in-range::-webkit-datetime-edit-month-field,
    &[type="date"]:in-range::-webkit-datetime-edit-day-field {
      opacity: 0.5;
    }
  }
  svg {
    position: absolute;
    bottom: 1.3rem;
    right: 1rem;
  }
  .error {
    border: 1px solid red;
  }
  .text-input {
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const TextField = React.forwardRef(({ label, disabled, width, className="", hidelabelondesktop, ...props }, ref) => {
  return (
    <Wrapper className={className} hidelabelondesktop={hidelabelondesktop}>
      {label && 
        <div className="label">
          <label className="type-body3" htmlFor={props.id || props.name}>{label}</label>
        </div>
      }
      <input className="text-input" {...props} ref={ref} disabled={disabled}/>
      {props.type === "date" && (
        <Calendar className="input-icon icon" />
      )}
    </Wrapper>
  );
});

export default TextField;
