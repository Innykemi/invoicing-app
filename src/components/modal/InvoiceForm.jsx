import React, { useState, useEffect } from "react";
import { styled } from 'goober';
import { minMobile, mobile } from "../../../globalStyle.jsx";
import Button from '../form/Button.jsx';
import TextField from "../form/TextField.jsx";
import TextFieldArea from "../form/TextFieldArea.jsx";
import DeleteIcon from "../../assets/images/DeleteIcon.jsx";
import { createInvoice, updateInvoice } from "../../actions/InvoiceActions.js";
import emailKey from "../../constants/emailKey.js";
import emailjs from '@emailjs/browser';

const InvoiceForm = ({ isEdit, handleClose, selectedInvoice }) => {
  const [selectedValues, setSelectedValues] = useState({
    invoiceId: selectedInvoice ? selectedInvoice.invoiceId : "",
    userName: selectedInvoice ? selectedInvoice.userName : "",
    userStreetAddress: selectedInvoice ? selectedInvoice.userStreetAddress : "",
    userCity: selectedInvoice ? selectedInvoice.userCity : "",
    userZipcode: selectedInvoice ? selectedInvoice.userZipcode : "",
    userCountry: selectedInvoice ? selectedInvoice.userCountry : "",
    clientName: selectedInvoice ? selectedInvoice.clientName : "",
    clientEmail: selectedInvoice ? selectedInvoice.clientEmail : "",
    clientStreetAddress: selectedInvoice ? selectedInvoice.clientStreetAddress : "",
    clientCity: selectedInvoice ? selectedInvoice.clientCity : "",
    clientZipcode: selectedInvoice ? selectedInvoice.clientZipcode : "",
    clientCountry: selectedInvoice ? selectedInvoice.clientCountry : "",
    invoiceDate: selectedInvoice ? selectedInvoice.invoiceDate : "",
    invoiceDueDate: selectedInvoice ? selectedInvoice.invoiceDueDate : "",
    projectDesc: selectedInvoice ? selectedInvoice.projectDesc : "",
    additionalNote: selectedInvoice ? selectedInvoice.additionalNote : "",
  });

  const [itemList, setItemList] = useState([
    { itemName: "", quantity: "", price: "", totalPrice: "0" }
  ]);

  useEffect(() => {
    if (selectedInvoice) {
      const items = selectedInvoice?.items;
      setItemList(items);
    }
    
  }, [selectedInvoice]);

  const handleOnChange = (name, e) => {
    setSelectedValues({ ...selectedValues, [name]: e.target.value });
  };

  const handleAddItem = () => {
    setItemList([...itemList, { itemName: "", quantity: "", price: "", totalPrice: "0" }]);
  };
  
  const handleDeleteItem = (index) => {
    const updatedItemList = [...itemList];
    updatedItemList.splice(index, 1);
    setItemList(updatedItemList);
    
  };

  const handleItemChange = (index, field, value) => {
    const updatedItemList = [...itemList];
    updatedItemList[index][field] = value;
  
    const totalPrice = parseFloat(updatedItemList[index].quantity) * parseFloat(updatedItemList[index].price);
    updatedItemList[index].totalPrice = isNaN(totalPrice) ? "0" : totalPrice.toFixed(2);
  
    setItemList(updatedItemList);
  };  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Access the button element that triggered the onSubmit event
    const clickedButton = e.nativeEvent.submitter;
    const buttonName = clickedButton.getAttribute("name");

    const updatedValues = {
      ...selectedValues,
      status: buttonName === "saveAsDraft" ? "Draft" : "Pending",
      items: itemList,
      totalAmount: itemList.reduce((total, item) => total + parseFloat(item.totalPrice || 0), 0).toFixed(2),
    };

    const templateParams = {
      client_name: selectedValues.clientName,
      sender: selectedValues.userName,
      to_email: selectedValues.clientEmail,
      message: "This is to inform you that an invoice has been generated, thank you",
    };
   
    emailjs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, templateParams, emailKey.PUBLIC_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    if (selectedInvoice) {
      updateInvoice(selectedInvoice.id, updatedValues);
    } else {
      createInvoice(updatedValues);
    }
    handleClose();
  };

  return (
    <Wrapper className="pop-out">
      <h2>
        {!selectedInvoice ? "New Invoice" : (
          `Edit #${selectedInvoice.invoiceId}`
        )}
      </h2>
      <Form id="invoiceForm" name="invoiceForm" onSubmit={handleFormSubmit}>
        <FieldsGroup>
          <legend>Bill from</legend>
          <TextField
            id="userName"
            name="userName"
            label="Name"
            type="text"
            defaultValue={selectedInvoice?.userName}
            onChange={(e) => handleOnChange("userName", e)}
          />
          <TextField
            id="userStreetAddress"
            name="userStreetAddress"
            label="Street Address"
            type="text"
            defaultValue={selectedInvoice?.userStreetAddress}
            onChange={(e) => handleOnChange("userStreetAddress", e)}
          />
          <InputGroup>
            <CustomTextField
              id="userCity"
              name="userCity"
              label="City"
              type="text"
              defaultValue={selectedInvoice?.userCity}
              onChange={(e) => handleOnChange("userCity", e)}
            />
            <CustomTextField
              id="userZipcode"
              name="userZipcode"
              label="Zip code"
              type="text"
              defaultValue={selectedInvoice?.userZipcode}
              onChange={(e) => handleOnChange("userZipcode", e)}
            />
            <CustomTextField
              id="userCountry"
              name="userCountry"
              label="Country"
              type="text"
              defaultValue={selectedInvoice?.userCountry}
              onChange={(e) => handleOnChange("userCountry", e)}
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <legend>Bill to</legend>
          <TextField
            id="clientName"
            name="clientName"
            label="Client's Name"
            type="text"
            defaultValue={selectedInvoice?.clientName}
            onChange={(e) => handleOnChange("clientName", e)}
          />
          <TextField
            id="clientEmail"
            name="clientEmail"
            label="Client's Email"
            type="email"
            defaultValue={selectedInvoice?.clientEmail}
            onChange={(e) => handleOnChange("clientEmail", e)}
            required
          />
          <TextField
            id="clientStreetAddress"
            name="clientStreetAddress"
            label="Street Address"
            type="text"
            defaultValue={selectedInvoice?.clientStreetAddress}
            onChange={(e) => handleOnChange("clientStreetAddress", e)}
          />
          <InputGroup>
            <CustomTextField
              id="clientCity"
              name="clientCity"
              label="City"
              type="text"
              defaultValue={selectedInvoice?.clientCity}
              onChange={(e) => handleOnChange("clientCity", e)}
            />
            <CustomTextField
              id="clientZipcode"
              name="clientZipcode"
              label="Zip code"
              type="text"
              defaultValue={selectedInvoice?.clientZipcode}
              onChange={(e) => handleOnChange("clientZipcode", e)}
            />
            <CustomTextField
              id="clientCountry"
              name="clientCountry"
              label="Country"
              type="text"
              defaultValue={selectedInvoice?.clientCountry}
              onChange={(e) => handleOnChange("clientCountry", e)}
            />
          </InputGroup>
        </FieldsGroup>
        <FieldsGroup>
          <InputGroup>
            <CustomTextField
              id="invoiceDate"
              name="invoiceDate"
              label="Invoice Date"
              type="date"
              defaultValue={selectedInvoice?.invoiceDate}
              onChange={(e) => handleOnChange("invoiceDate", e)}
            />
            <CustomTextField
              id="invoiceDueDate"
              name="invoiceDueDate"
              label="Invoice Due Date"
              type="date"
              defaultValue={selectedInvoice?.invoiceDueDate}
              onChange={(e) => handleOnChange("invoiceDueDate", e)}
            />
            
          </InputGroup>
          <TextField
            id="projectDesc"
            name="projectDesc"
            label="Project Description"
            type="text"
            placeholder="e.g Landing page redesign"
            defaultValue={selectedInvoice?.projectDesc}
            onChange={(e) => handleOnChange("projectDesc", e)}
          />
        </FieldsGroup>
        <FieldsGroup>
          <legend className="item-list">Item List</legend>
          {itemList?.map((item, index) => (
            <ItemList key={index}>
              <ItemTextField
                label="Item name"
                type="text"
                className="item-name"
                value={item.itemName}
                onChange={(e) => handleItemChange(index, "itemName", e.target.value)}
              />
              <ItemTextField
                label="Qty"
                type="text"
                className="qty"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
              />
              <ItemTextField
                label="Price"
                type="text"
                className="price"
                value={item.price}
                onChange={(e) => handleItemChange(index, "price", e.target.value)}
              />
              <p className="total-price">&#8358; {item.totalPrice}</p>
              <span className="delete-icon" onClick={() => handleDeleteItem(index)}><DeleteIcon /></span>
              
            </ItemList>
          ))}
          <Button
            bg="rgba(0, 45, 124, 0.6)"
            textcolor="var(--light)"
            type="button" 
            onClick={handleAddItem}
          >
            Add Item
          </Button>
        </FieldsGroup>
        <TextFieldArea 
          label="Additional Note" 
          defaultValue={selectedInvoice?.additionalNote}
          onChange={(e) => handleOnChange("additionalNote", e)} 
          id="additionalNote" 
          ame="additionalNote" 
        />
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
            form="invoiceForm"
            type="submit"
            name="saveAsDraft"
          >
            Save as Draft
          </Button>
          <Button
            bg="var(--green)"
            textcolor="var(--primary)"
            type="submit"
            form="invoiceForm"
            name="saveAndSend"
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
  .delete-icon {
    cursor: pointer;
  }
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
  grid-template-columns: minmax(44px, 1fr) minmax(70px, 1fr) minmax(65px, 120px) auto;
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
