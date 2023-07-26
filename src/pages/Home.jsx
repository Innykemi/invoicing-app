import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "goober";
import { minMobile } from "../../globalStyle.jsx";
import PlusIcon from "../assets/images/PlusIcon.jsx";
import InvoiceListItem from "../components/InvoiceListItem.jsx";
import Layout from "../components/Layout.jsx";
import Modal from "../components/modal/index.jsx";
import { initializeInvoicesInLocalStorage, getInvoicesFromLocalStorage } from '../actions/InvoiceActions.jsx';

function Home() {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    initializeInvoicesInLocalStorage();

    const invoicesFromLocalStorage = getInvoicesFromLocalStorage();
    setInvoices(invoicesFromLocalStorage);

  }, []);

  const handleInvoiceModal = () => {
    setShowInvoiceModal(!showInvoiceModal);
  };

  return (
    <Layout>
      <TitleHeader className="fade-in">
        <h2>Invoices</h2>
        <Options>
          <button className="new-invoice" onClick={handleInvoiceModal}>
            <span className="icon-container"><PlusIcon /></span>
            New Invoice
          </button>
        </Options>
      </TitleHeader>
      <Invoices>
        {invoices?.map(item => (
          <InvoiceListItem key={item.invoiceId} index={item.id}
            invoiceId={item.invoiceId}
            dueDate={item.invoiceDueDate}
            clientName={item.clientName}
            totalPrice={item.totalAmount}
            invoiceStatus={item.status}
          />
        ))}
      </Invoices>
      {showInvoiceModal && <Modal isForm handleClose={handleInvoiceModal} />}
    </Layout>
  );
}

export default Home;

const TitleHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  gap: 1.125rem;
  ${minMobile} {
    margin: 4.5rem 0 4rem 0;
    gap: 2.5rem;
  }
  h2 {
    font-size: 2rem;
    color: var(--white);
  }
`;
const Options = styled("div")`
  display: flex;
  gap: 2.5rem;
  .filter {
    color: var(--white);
    font-weight: 600;
  }
  .new-invoice {
    display: flex;
    gap: 1rem;
    background: var(--blue);
    color: var(--white);
    border-radius: var(--br-xl);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    .icon-container {
      min-width: 2rem;
      min-height: 2rem;
      border-radius: 50%;
      background: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Invoices = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;
