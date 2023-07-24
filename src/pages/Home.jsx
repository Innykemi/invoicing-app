import React from "react";
import { styled } from "goober";
import { minMobile } from "../../globalStyle.jsx";
import Layout from "../components/Layout.jsx";
import PlusIcon from "../assets/images/PlusIcon.jsx";

function Home() {
  return (
    <Layout>
      <TitleHeader className="fade-in">
        <h2>Invoices</h2>
        <Options>
          <button className="filter">Filter by status</button>
          <button className="new-invoice">
            <span className="icon-container"><PlusIcon /></span>
            New Invoice</button>
        </Options>
      </TitleHeader>
      <Invoices>

      </Invoices>
    </Layout>
  );
}

export default Home;

const TitleHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${minMobile} {
    margin: 72px 0 64px 0;
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
    background: var(--green);
    color: var(--primary);
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
const Invoices = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
