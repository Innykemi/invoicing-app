import { useState, useEffect } from "react";
import { getInvoicesFromLocalStorage } from "../actions/InvoiceActions";

export const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export function generateNextInvoiceId() {
  const invoices = getInvoicesFromLocalStorage();
  const lastInvoice = invoices[invoices.length - 1];
  const nextInvoiceId = lastInvoice.id + 1;
  return nextInvoiceId;
}
