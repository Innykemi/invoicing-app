import React from "react";
import { styled } from 'goober';
import Button from '../form/Button.jsx';

const ModalDelete = ({ handleClose }) => {
  return (
    <Wrapper className="pop-out">
      <h2>Confirm Deletion</h2>
      <p>
        Are you sure you want to delete invoice # This action cannot be undone.
      </p>
      <ButtonGroup>
        <Button
          bg="rgba(0, 45, 124, 0.6)"
          textcolor="var(--light)"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          bg="#ec5555"
          textcolor="var(--white)"
          onClick={handleClose}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default ModalDelete;

const Wrapper = styled("div")`
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  border-radius: var(--br);
  background: var(--primary);
  h2 {
    font-family: var(--semi-bold);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.14;
    color: var(--white);
  }
  p {
    font-size: 0.75rem;
    line-height: 1.84;
    color: var(--light);
    margin-bottom: 1.5rem;
  }
`;
const ButtonGroup = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 2rem;
`;
