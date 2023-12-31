import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { styled } from "goober";
import { createWrapperAndAppendToBody } from "../../utils/helpers.js";
import ModalDelete from "./ModalDelete.jsx";
import ModalStatus from "./ModalStatus.jsx";
import InvoiceForm from "./InvoiceForm.jsx";


const Modal = ({
    wrapperId = "modal-portal-root",
    isForm,
    isDelete,
    isStatus,
    handleClose,
    selectedInvoice,
    invoices,
    isEdit,
  }, ref) => {
  let element = document.getElementById(wrapperId);

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const modal = (
    <StyledModal
      aria-modal
      tabIndex={-1}
      role="dialog"
      ref={ref}
    >
      {isForm &&
        <InvoiceForm
          handleClose={handleClose}
          selectedInvoice={selectedInvoice}
          invoices={invoices}
        />
      }
      {isDelete && <ModalDelete handleClose={handleClose} id={selectedInvoice.id} isEdit={isEdit} />}
      {isStatus && <ModalStatus handleClose={handleClose} id={selectedInvoice.id} />}
    </StyledModal>
  );

  return createPortal(modal, element);
};

export default React.forwardRef(Modal);

const StyledModal = styled("div")`
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
