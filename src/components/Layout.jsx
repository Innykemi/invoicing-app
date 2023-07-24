import React from "react";
import { styled } from "goober";
import Sidebar from "./Sidebar.jsx";
import { minMobile } from "../../globalStyle.jsx";

function Layout({ children, className }) {
  return (
    <Wrapper>
      <Sidebar />
      <Container className={className}>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled("main")`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 400ms ease-in-out;
  .invoice {
    margin-top: 4rem;
  }
  ${minMobile} {
    flex-direction: row;
  }
`;
const Container = styled("div")`
  margin-bottom: 2.5rem;
  padding: 0 1.5rem;
  .back-link {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.75rem;
    font-family: var(--semi-bold);
    font-weight: 700;
  }
  ${minMobile} {
    max-width: 830px;
    width: 100%;
    margin: 0 auto 2.5rem auto;
    margin-left: auto;
    width: calc(100vw - 6.375rem);
    padding: 0;
  }
`;
