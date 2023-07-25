import React from "react";
import { Link } from "react-router-dom";
import { styled } from "goober";
import { minMobile } from "../../globalStyle.jsx";
import ArrowRight from "../assets/images/ArrowRight.jsx";
import StatusIndicator from "./InvoiceStatusIndicator.jsx";

function InvoiceListItem({ index, invoiceId, dueDate, clientName, totalPrice, invoiceStatus }) {
  return (
    <Wrapper delay={index * 0.2}>
      <Link to={`/invoice`} className="container">
        <p className="uid"><span>#</span>{invoiceId}</p>
        <p className="payment-due">Due {dueDate}</p>
        <p className="client-name">{clientName}</p>
        <p className="total-price">&#8358; {totalPrice ? totalPrice: "0.00" }</p>
        <div className="status">
          <StatusIndicator status={invoiceStatus} />
        </div>
        <ArrowRight />
      </Link>
    </Wrapper>
  );
};

export default InvoiceListItem;

const Wrapper = styled("li")`
  background-color: rgba(0, 45, 124, 0.4);
  color: var(--light);
  border-radius: var(--br);
  box-shadow: 0 10px 10px -10px rgba(71, 84, 158, 0.1);
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  animation-delay: ${(props) => props.delay}s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  .container {
    display: grid;
    grid-template-rows: 1.5fr 1fr 1fr;
    grid-template-areas:
      'uid clientname'
      'paymentdue status'
      'totalprice status';
    justify-content: space-between;
    padding: 2.5rem;
    border: 1px solid transparent;
    border-radius: var(--br);
    .uid {
      font-family: var(--semi-bold);
      font-weight: 700;
      font-size: 0.75rem;
      grid-area: uid;
      .span {
        color: var(--);
      }
    }
    .payment-due {
      grid-area: paymentdue;
    }
    .client-name {
      grid-area: clientname;
      justify-self: end;
    }
    .total-price {
      font-weight: 700;
      font-family: var(--semi-bold);
      font-size: 1.25rem;
      line-height: 1.5;
      grid-area: totalprice;
    }
    .status {
      grid-area: status;
    }
    svg {
      display: none;
    }
    ${minMobile} {
      grid-template-rows: unset;
      grid-template-areas: unset;
      grid-template-columns: 103px 140px 177px 153px 115px 28px;
      align-items: center;
      padding: 0.875rem 1.25rem 0.875rem 2rem;
      .uid {
        grid-area: unset;
      }
      .payment-due {
        grid-area: unset;
      }
      .client-name {
        grid-area: unset;
        justify-self: start;
      }
      .total-price {
        grid-area: unset;
        justify-self: end;
      }
      .status {
        grid-area: unset;
        justify-self: end;
      }
      svg {
        display: block;
        margin-left: auto;
      }
    }
  }
`;
