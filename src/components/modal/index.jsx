import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { styled } from "goober";
import { minMobile } from "../../../globalStyle.jsx";
import { createWrapperAndAppendToBody } from "../../utils/helpers.jsx";
import ModalDelete from "./ModalDelete.jsx";
import ModalStatus from "./ModalStatus.jsx";
import InvoiceForm from "./InvoiceForm.jsx";


const Modal = ({ wrapperId = "modal-portal-root", isForm, isDelete, isStatus, handleClose }, ref) => {
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
      {isForm && <InvoiceForm handleClose={handleClose} />}
      {isDelete && <ModalDelete handleClose={handleClose} />}
      {isStatus && <ModalStatus handleClose={handleClose} />}
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
