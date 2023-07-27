import { EventEmitter } from 'events';
import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher.js';
import InvoiceConstants from '../constants/InvoiceConstants.js';
import { updateLocalStorage, getInvoicesFromLocalStorage } from '../actions/InvoiceActions.js';

class InvoiceStore extends ReduceStore {
  constructor() {
    super(dispatcher);
    this.state = {
      invoices: getInvoicesFromLocalStorage(),
    };
  }

  getInitialState() {
    return {
      invoices: getInvoicesFromLocalStorage(),
    };
  }

  getAllInvoices() {
    return getInvoicesFromLocalStorage();
  }

  reduce(state, action) {
    if (!action || typeof action.type !== 'string') {
      // Invalid or undefined action, return the current state
      return state;
    }

    switch (action.type) {
      case InvoiceConstants.CREATE_INVOICE: {
        const { payload } = action;
        const updatedInvoices = [...state.invoices, payload];
        updateLocalStorage(payload, 'new'); //for persistent
        return {
          ...state,
          invoices: updatedInvoices,
        };
      }

      case InvoiceConstants.MARK_AS_PAID: {
        const { invoiceId } = action;
        const updatedInvoices = state.invoices.map((invoice) =>
          invoice.invoiceId === invoiceId ? { ...invoice, status: "Paid" } : invoice
        );
        updateLocalStorage(null, invoiceId);
        return {
          ...state,
          invoices: updatedInvoices,
        };
      }

      case InvoiceConstants.SEND_INVOICE: {
        const { payload } = action;
        const sentInvoiceId = payload;
        const updatedInvoices = state.invoices.map((invoice) =>
          invoice.id === sentInvoiceId ? { ...invoice, sent: true } : invoice
        );
        return {
          ...state,
          invoices: updatedInvoices,
        };
      }

      case InvoiceConstants.UPDATE_INVOICE: {
        const { invoiceId, updatedInvoiceData } = action.payload;
        const updatedInvoices = state.invoices.map((invoice) =>
          invoice.id === invoiceId ? { ...invoice, ...updatedInvoiceData } : invoice
        );
        updateLocalStorage(updatedInvoiceData, invoiceId);
        return {
          ...state,
          invoices: updatedInvoices,
        };
      }

      case InvoiceConstants.DELETE_INVOICE: {
        const { payload } = action;
        const deletedInvoiceId = payload;
        const updatedInvoices = state.invoices.filter((invoice) => invoice.id !== deletedInvoiceId);
        updateLocalStorage(deletedInvoiceId, 'remove');
        return {
          ...state,
          invoices: updatedInvoices,
        };
      }

      default:
        return state;
    }
  }
}

const invoiceStore = new InvoiceStore();
export default invoiceStore;

dispatcher.register((action) => {
  invoiceStore.reduce(action);
});
