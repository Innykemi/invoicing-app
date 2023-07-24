import React from "react";
import { styled } from "goober";
import { minMobile } from "../../globalStyle.jsx";

function InvoiceListItem({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default InvoiceListItem;

const Wrapper = styled("div")`
  background-color: var(--light);
  color: var(--primary);
  border-radius: var(--br);
  box-shadow: 0 10px 10px -10px hsla(231,38%,45%,10%);
  transition: background-color 400ms ease-in-out;
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
      font-family: "Inter-SemiBold", sans-serif;
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
      font-size: 1rem;
      line-height: 1.5;
      grid-area: totalprice;
    }
    .status {
      grid-area: status;
      width: 104px;
      padding: 13px 0;
      font-weight: 700;
      text-align: center;
      border-radius: var(--br-sm);
      background-color: hsla(231,75%,93%,5.71%);
      color: hsl(231,75%,93%);
      align-self: center;
    }
    ${minMobile} {
      grid-template-rows: unset;
      grid-template-areas: unset;
      grid-template-columns: 103px 151px 145px 103px 146px 28px;
      align-items: center;
      padding: 15px 20px 15px 32px;
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
    }
  }
`;
