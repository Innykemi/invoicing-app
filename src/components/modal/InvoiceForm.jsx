import React, { useState } from "react";
import { styled } from 'goober';
import { minMobile, mobile } from "../../../globalStyle.jsx";
import Button from '../form/Button.jsx';
import TextField from "../form/TextField.jsx";
import TextFieldArea from "../form/TextFieldArea.jsx";
import DeleteIcon from "../../assets/images/DeleteIcon.jsx";

const InvoiceForm = ({ handleClose }) => {
  const [selectedValues, setSelectedValues] = useState({
    user_street_address: "",
    city: "",
    zipcode: "",
    country: "",
    client_name: "",
    client_email: "",
    client_street_address: "",
    client_city: "",
    invoice_date: "",
    invoice_due_date: "",
    project_desc: "",
    additional_note: "",
  });

  const handleOnChange = (name, e) => {
    setSelectedValues({ ...selectedValues, [name]: e.target.value });
  };

  return (
    <Wrapper className="pop-out">
      <h2>inv01</h2>
      <Form id="invoice">
        <FieldsGroup>
          <legend>Bill from</legend>
          <TextField
            id="user_street_address"
            name="user_street_address"
            label="Street Address"
            type="text"
            defaultValue={selectedValues.user_street_address}
            onChange={(e) => handleOnChange("user_street_address", e)}
          />
          <InputGroup>
            <CustomTextField
              id="city"
              name="city"
              label="City"
              type="text"
              defaultValue={selectedValues.city}
              onChange={(e) => handleOnChange("city", e)}
            />
            <CustomTextField
              id="zipcode"
              name="zipcode"
              label="Zip code"
              type="text"
              defaultValue={selectedValues.zipcode}
              onChange={(e) => handleOnChange("zipcode", e)}
            />
            <CustomTextField
              id="country"
              name="country"
              label="Country"
              type="text"
              defaultValue={selectedValues.country}
              onChange={(e) => handleOnChange("country", e)}
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <legend>Bill to</legend>
          <TextField
            id="client_name"
            name="client_name"
            label="Client's Name"
            type="text"
            defaultValue={selectedValues.client_name}
            onChange={(e) => handleOnChange("client_name", e)}
          />
          <TextField
            id="client_email"
            name="client_email"
            label="Client's Email"
            type="email"
            defaultValue={selectedValues.client_email}
            onChange={(e) => handleOnChange("client_email", e)}
            required
          />
          <TextField
            id="client_street_address"
            name="client_street_address"
            label="Street Address"
            type="text"
            defaultValue={selectedValues.client_street_address}
            onChange={(e) => handleOnChange("client_street_address", e)}
          />
          <InputGroup>
            <CustomTextField
              id="client_city"
              name="client_city"
              label="City"
              type="text"
              defaultValue={selectedValues.client_city}
              onChange={(e) => handleOnChange("client_city", e)}
            />
            <CustomTextField
              id="client_zipcode"
              name="client_zipcode"
              label="Zip code"
              type="text"
              defaultValue={selectedValues.client_zipcode}
              onChange={(e) => handleOnChange("client_zipcode", e)}
            />
            <CustomTextField
              id="client_country"
              name="client_country"
              label="Country"
              type="text"
              defaultValue={selectedValues.client_country}
              onChange={(e) => handleOnChange("client_country", e)}
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <InputGroup>
            <CustomTextField
              id="invoice_date"
              name="invoice_date"
              label="Invoice Date"
              type="date"
              defaultValue={selectedValues.invoice_date}
              onChange={(e) => handleOnChange("invoice_date", e)}
            />
            <CustomTextField
              id="invoice_due_date"
              name="invoice_due_date"
              label="Invoice Due Date"
              type="date"
              defaultValue={selectedValues.invoice_due_date}
              onChange={(e) => handleOnChange("invoice_due_date", e)}
            />
            
          </InputGroup>
          <TextField
            id="project_desc"
            name="project_desc"
            label="Project Description"
            type="text"
            placeholder="e.g Landing page redesign"
            defaultValue={selectedValues.project_desc}
            onChange={(e) => handleOnChange("project_desc", e)}
          />
        </FieldsGroup>
        <FieldsGroup>
          <legend className="item-list">Item List</legend>
          <ItemList className="header">
            <span className="item-name">Item name</span>
            <span className="qty">Qty</span>
            <span className="price">Price</span>
            <span className="total-price">Total</span>
            <span className="delete"></span>
          </ItemList>
          <ItemList>
            <ItemTextField
              id="item_name_"
              label="Item name"
              type="text"
              className="item-name"
              hidelabelondesktop
            />
            <ItemTextField
              id="qty_"
              label="Qty"
              type="text"
              className="qty"
              hidelabelondesktop
            />
            <ItemTextField
              id="price_"
              label="Price"
              type="text"
              className="price"
              hidelabelondesktop
            />
            <p className="total-price">150</p>
            <DeleteIcon />
          </ItemList>
        </FieldsGroup>
        <TextFieldArea label="Additional Note" id="additional_note" name="additional_note" />
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
const ItemList = styled("div")`
  display: grid;
  grid-template-columns: minmax(64px, 1fr) minmax(100px, 1fr) minmax(65px, 94px) auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'name name name name'
    'qty price total delete';
  align-items: center;
  width: 100%;
  row-gap: 1.125rem;
  column-gap: 1rem;
  span {
    font-size: 0.75rem;
  }
  .item-name {
    grid-area: name; 
  }
  .qty {
    grid-area: qty;
  }
  .price {
    grid-area: price;
  }
  .total-price {
    grid-area: total;
    font-family: var(--semi-bold);
    font-weight: 700;
  }
  .delete {
    grid-area: delete;
  }
  ${minMobile} {
    grid-template-columns: 214px 51px 100px 1fr;
    grid-template-areas: 'name qty price total delete';
    grid-template-rows: auto;
  }
  ${mobile} {
    &.header {
      display: none;
    }
  }
`;
const ItemTextField = styled(TextField)`
  input {
    min-width: unset;
  }
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
