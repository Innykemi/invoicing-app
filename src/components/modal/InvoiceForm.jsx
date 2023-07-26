import React from "react";
import { styled } from 'goober';
import Button from '../form/Button.jsx';
import TextField from "../form/TextField.jsx";
import { minMobile } from "../../../globalStyle.jsx";
import TextFieldArea from "../form/TextFieldArea.jsx";

const InvoiceForm = ({ handleClose }) => {
  return (
    <Wrapper className="pop-out">
      <h2>inv01</h2>
      <Form id="invoice">
        <FieldsGroup>
          <legend>Bill from</legend>
          <TextField
            id="user_street_address"
            label="Street Address"
            type="text"
          />
          <InputGroup>
            <CustomTextField
              id="city"
              label="City"
              type="text"
            />
            <CustomTextField
              id="zipcode"
              label="Zip code"
              type="text"
            />
            <CustomTextField
              id="country"
              label="Country"
              type="text"
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <legend>Bill to</legend>
          <TextField
            id="client_name"
            label="Client's Name"
            type="text"
          />
          <TextField
            id="client_email"
            label="Client's Email"
            type="email"
          />
          <TextField
            id="client_street_address"
            label="Street Address"
            type="text"
          />
          <InputGroup>
            <CustomTextField
              id="city"
              label="City"
              type="text"
            />
            <CustomTextField
              id="zipcode"
              label="Zip code"
              type="text"
            />
            <CustomTextField
              id="country"
              label="Country"
              type="text"
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <InputGroup>
            <CustomTextField
              id="invoice_date"
              label="Invoice Date"
              type="date"
            />
            <CustomTextField
              id="project_desc"
              label="Project Description"
              type="text"
              placeholder="e.g Landing page redesign"
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <legend className="item-list">Item List</legend>
          <TextField
            id="user_street_address"
            label="Street Address"
            type="text"
          />
          <InputGroup>
            <CustomTextField
              id="city"
              label="City"
              type="text"
            />
            <CustomTextField
              id="zipcode"
              label="Zip code"
              type="text"
            />
            <CustomTextField
              id="country"
              label="Country"
              type="text"
            />
          </InputGroup>
        </FieldsGroup>
        <TextFieldArea label="Additional Note" />
      </Form>
      <ButtonGroup>
        <Button
          bg="rgba(0, 45, 124, 0.6)"
          textcolor="var(--light)"
          onClick={handleClose}
        >
          Discard
        </Button>
        <div className="group">
          <Button
            bg="rgba(0, 45, 124, 0.5)"
            textcolor="var(--light)"
            onClick={handleClose}
          >
            Save as Draft
          </Button>
          <Button
            bg="var(--green)"
            textcolor="var(--primary)"
            onClick={handleClose}
            type="submit"
            form="invoice"
          >
            Save & Send
          </Button>
        </div>
      </ButtonGroup>
    </Wrapper>
  );
};

export default InvoiceForm;

const Wrapper = styled("div")`
  width: 100%;
  max-width: 680px;
  padding: 1rem 0.25rem 1rem 1rem;
  border-radius: var(--br);
  background: var(--primary);
  h2 {
    font-family: var(--semi-bold);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.14;
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  ${minMobile} {
    padding: 2rem;
  }
`;
const Form = styled("form")`
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  height: 50vh;
  overflow-y: scroll;
  padding-right: 1.25rem;
  legend {
    font-size: 0.75rem;
    line-height: 1.84;
    color: var(--green);
    margin-bottom: 1.5rem;
    font-family: var(--semi-bold);
    font-weight: 700;
    &.item-list {
      font-size: 1.125rem;
      color: #62839b;
    }
  }
  &:focus {
    outline: none;
  }
  scrollbar-width: thin;
  scrollbar-color: #0a253c transparent;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0a253c;
    border-radius: 1.25rem;
  }
  ${minMobile} {
    padding: 0px 1.5rem 0.625rem 0.625rem;
  }
`;
const FieldsGroup = styled("fieldset")`
  border: none;
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
`;
const InputGroup = styled("div")`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  gap: 1.5rem;
  width: 100%;
`;
const CustomTextField = styled(TextField)`
  flex: 1;
`;
const ButtonGroup = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0 1.25rem 0 0;
  .group {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
