import React from "react";
import { Link } from "react-router-dom";
import { styled } from "goober";
import { minMobile } from "../../globalStyle.jsx";
import Button from "../assets/components/Button.jsx";
import ArrowLeft from "../assets/images/ArrowLeft.jsx";
import StatusIndicator from "../components/InvoiceStatusIndicator.jsx";
import Layout from "../components/Layout.jsx";

function Invoice() {
  return (
    <Layout className="invoice">
      <Link to="/" className="back-link"><ArrowLeft />Go back</Link>
      <Header>
        <p className="status-label">Status</p>
        <StatusIndicator status="paid" />
        <div className="invoice-actions">
          <Button bg="rgba(0, 45, 124, 0.6)" textcolor="var(--light)" >
            Edit
          </Button>
          <Button bg="#ec5555" textcolor="var(--white)">
            Delete
          </Button>
          <Button bg="var(--green)" textcolor="var(--primary)">
            Mark as Paid
          </Button>
        </div>
      </Header>
      <Content>
        <Info>
          <div className="invoice-id">
            <h3>#inv01</h3>
            <p>Summary</p>
          </div>
          <address className="user-address">why you want</address>
          <div className="invoice-date grid">
            <h4 className="label">Invoice Date</h4>
            <p className="desc">30 Jul 2023</p>
          </div>
          <div className="client-info grid">
            <h4 className="label">Bill to</h4>
            <p className="desc">Client Info</p>
            <address>why you want</address>
          </div>
          <div className="client-email grid">
            <h4 className="label">Sent to</h4>
            <p className="desc">client email</p>
          </div>
          <div className="payment-due grid">
            <h4 className="label">Payment Due</h4>
            <p className="desc">30 Aug 2023</p>
          </div>
        </Info>
        <ServicePrices>
          <div className="items-wrapper">
            <div className="item-header">
              <p>Item name</p>
              <p>Qty.</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div className="item-details">
              <p className="item-name">Banner Design</p>
              <p className="item-qty">1 </p>
              <p className="item-price">&#8358; 156.00</p>
              <p className="item-total-price">&#8358; 156.00</p>
            </div>
            <div className="item-details">
              <p className="item-name">Banner Design</p>
              <p className="item-qty">1 </p>
              <p className="item-price">&#8358; 156.00</p>
              <p className="item-total-price">&#8358; 156.00</p>
            </div>
          </div>
        </ServicePrices>
        <AmountDue>
          <p>Amount Due</p>
          <h2>&#8358; 556.00</h2>
        </AmountDue>
      </Content>
    </Layout>
  );
}

export default Invoice;

const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-radius: var(--br);
  background: rgba(0, 45, 124, 0.4);
  box-shadow: 0 10px 10px -10px rgba(71, 84, 158, 0.1);
  .status-label {
    font-size: 0.75rem;
  }
  .invoice-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.375rem 0;
    margin-top: 3.5rem;
  }
  ${minMobile} {
    padding: 1.25rem 1.5rem;
    gap: 1rem;
    .invoice-actions {
      margin-top: unset;
      margin-left: auto;
      padding: unset;
    }
  }
`;
const Content = styled("article")`
  background-color: rgba(0, 45, 124, 0.4);
  border-radius: var(--br);
  box-shadow: 0 10px 10px -10px rgba(71, 84, 158, 0.1);
  padding: 3rem;
`;
const Info = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'key .'
    'senderAddress .'
    'createdDate clientInfo'
    'paymentDue clientInfo'
    'email email';
  gap: 1.875rem;
  margin-bottom: 2.5rem;
  address {
    font-size: 0.6875rem;
    display: flex;
    flex-flow: column;
    font-style: unset;
  }
  .grid {
    display: flex;
    flex-flow: column;
    gap: 0.75rem;
    .label {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25;
      color: var(--light);
    }
    .desc {
      font-family: var(--semi-bold);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1;
      color: var(--white);
    }
  }
  .invoice-id {
    grid-area: key;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    h3 {
      font-size: 1rem;
      color: var(--white);
    }
    p {
      font-size: 0.75rem;
      color: var(--light);
    }
  }
  .user-address {
    grid-area: senderAddress;
  }
  .invoice-date {
    grid-area: createdDate;
  }
  .client-info {
    grid-area: clientInfo;
  }
  .client-email {
    grid-area: email;
  }
  .payment-due {
    grid-area: paymentDue;
    align-self: end;
  }
  ${minMobile} {
    grid-template-columns: auto auto auto;
    grid-template-areas:
      'key . senderAddress'
      'createdDate clientInfo email'
      'paymentDue clientInfo email';
    gap: 1.25rem;
    .user-address {
      justify-self: end;
      text-align: right;
    }
  }
`;
const ServicePrices = styled("div")`
  background-color: rgba(0, 45, 124, 0.3);
  transition: background-color 400ms ease-in-out;
  border-radius: var(--br) var(--br) 0 0;
  .items-wrapper {
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
    padding: 1.5rem;
    .item-header {
      display: grid;
      grid-template-columns: minmax(200px, 270px) minmax(40px, 80px) minmax(40px, 150px) 1fr;
      font-size: 0.6875rem;
      line-height: 1.63;
      color: var(--light);
      & p:nth-child(2) {
        justify-self: center;
      }
      & p:nth-child(3),
      & p:nth-child(4) {
        justify-self: end;
      }
    }
    .item-details {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas:
        'name total'
        'qty total';
      gap: 10px;
      align-items: center;
      font-weight: 700;
      font-family: var(--semi-bold);
      font-size: 0.75rem;
      .item-name {
        grid-area: name;
      }
      .item-qty {
        grid-area: qty;
      }
      .item-price {
        grid-area: price;
      }
      .item-total-price {
        grid-area: total;
      }
      ${minMobile} {
        grid-template-columns: minmax(200px, 270px) minmax(40px, 80px) minmax(40px, 150px) 1fr;
        grid-template-areas: 'name qty price total';
        gap: unset;
        .item-qty {
          justify-self: center;
        }
        .item-price,
        .item-total-price {
          justify-self: end;
        }
      }
    }
  }
`;
const AmountDue = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 400ms ease-in-out;
  border-radius: 0 0 var(--br) var(--br);
  padding: 0.875rem 2rem;
  background: var(--black);
  p {
    font-size: 0.6875rem;
  }
  h2 {
    font-size 1.5rem;
    font-weight: 700;
    font-family: var(--semi-bold);
  }
`;
