import dispatcher from '../dispatcher.js';
import InvoiceConstants from "../constants/InvoiceConstants.js";
import { generateNextInvoiceId } from '../utils/helpers.js';
import data from "../data.json";
import emailKey from '../constants/emailKey.js';
import emailjs from '@emailjs/browser';

export function createInvoice(invoiceData) {
  const newId = generateNextInvoiceId();
  dispatcher.dispatch({
    type: InvoiceConstants.CREATE_INVOICE,
    payload: {
      ...invoiceData,
      id: newId,
      invoiceId: `INV${newId}`,
    },
  });
}

export function markAsPaid(invoiceId) {
  dispatcher.dispatch({
    type: InvoiceConstants.MARK_AS_PAID,
    invoiceId: invoiceId,
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
    const invoicesWithFlags = data.map((invoice) => ({
      ...invoice,
      emailSent: false,
    }));

    const invoicesJSON = JSON.stringify(invoicesWithFlags);
    localStorage.setItem('invoices', invoicesJSON);

    localStorage.setItem(INITIALIZED_FLAG_KEY, 'true');
  }
}

export function getInvoicesFromLocalStorage() {
  const invoicesJSON = localStorage.getItem('invoices');
  const result = invoicesJSON ? JSON.parse(invoicesJSON) : [];
  const today = new Date();

  // Map over the invoices and update the status property based on the invoiceDueDate
  const invoicesWithUpdatedStatus = result.map(item => {
    if (!item.emailSent && new Date(item.invoiceDueDate) < today) {
      //send email for due email
      const templateParams = {
        client_name: item.clientName,
        sender: item.userName,
        to_email: item.clientEmail,
        message: "This is to inform you that your invoice is due. Kindly make payment, thank you"
      };
      emailjs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, templateParams, emailKey.PUBLIC_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });

      item.status = 'Overdue';
      item.emailSent = true ;
    }
    return item;
  });
  return invoicesWithUpdatedStatus;
}


export function updateLocalStorage(invoice, action) {
  let invoicesJSON = localStorage.getItem('invoices');
  const parsedInvoicesJSON = invoicesJSON ? JSON.parse(invoicesJSON) : [];
  if (action === "new") {
    const invoices = [...parsedInvoicesJSON, invoice];
    localStorage.setItem('invoices', JSON.stringify(invoices));
  } else if (action === 'remove') {
    // Find the index of the invoice with the matching id
    const index = parsedInvoicesJSON.findIndex((item) => item.id === invoice);

    // If the invoice is found (index is not -1), remove it from the array
    if (index !== -1) {
      parsedInvoicesJSON.splice(index, 1);

      // Update local storage with the updated invoices
      localStorage.setItem('invoices', JSON.stringify(parsedInvoicesJSON));
    }
  } else {
    // Find the index of the invoice with the matching id
    const index = parsedInvoicesJSON.findIndex((item) => item.id === action);

    // If the invoice is found (index is not -1), update its properties
    if (index !== -1) {
      if (invoice) {
        const updatedInvoice = { ...parsedInvoicesJSON[index], ...invoice };
        // Replace the old invoice with the updated one
        parsedInvoicesJSON.splice(index, 1, updatedInvoice);
      } else {
        parsedInvoicesJSON[index]["status"] = 'Paid';
      }
      // Update local storage with the updated invoices
      localStorage.setItem('invoices', JSON.stringify(parsedInvoicesJSON));
    }
  }
}

