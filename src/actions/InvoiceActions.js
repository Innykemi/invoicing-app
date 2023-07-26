import dispatcher from '../dispatcher.js';
import InvoiceConstants from "../constants/InvoiceConstants.js";
import data from "../data.json";

export function createInvoice(invoiceData) {
  dispatcher.dispatch({
    type: InvoiceConstants.CREATE_INVOICE,
    payload: invoiceData,
  });
}

export function addLineItem(invoiceId, lineItemData) {
  dispatcher.dispatch({
    type: InvoiceConstants.ADD_LINE_ITEM,
    payload: {
      invoiceId,
      lineItemData,
    },
  });
}

export function sendInvoice(invoiceId) {
  dispatcher.dispatch({
    type: InvoiceConstants.SEND_INVOICE,
    payload: invoiceId,
  });
}

export function updateInvoice(invoiceId, updatedInvoiceData) {
  dispatcher.dispatch({
    type: InvoiceConstants.UPDATE_INVOICE,
    payload: {
      invoiceId,
      updatedInvoiceData,
    },
  });
}

export function deleteInvoice(invoiceId) {
  dispatcher.dispatch({
    type: InvoiceConstants.DELETE_INVOICE,
    payload: invoiceId,
  });
}

const INITIALIZED_FLAG_KEY = 'invoices_initialized'; //

export function initializeInvoicesInLocalStorage() {
  const isInitialized = localStorage.getItem(INITIALIZED_FLAG_KEY);

  if (!isInitialized) {
    const invoicesJSON = JSON.stringify(data);
    localStorage.setItem('invoices', invoicesJSON);

    localStorage.setItem(INITIALIZED_FLAG_KEY, 'true');
  }
}

export function getInvoicesFromLocalStorage() {
  const invoicesJSON = localStorage.getItem('invoices');
  return invoicesJSON ? JSON.parse(invoicesJSON) : [];
}
  
export function updateLocalStorage(invoices) {
  const invoicesJSON = JSON.stringify(invoices);
  localStorage.setItem('invoices', invoicesJSON);
}
