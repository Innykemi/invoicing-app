import React from "react";
import { styled } from "goober";
import Sidebar from "./Sidebar.jsx";
import { minMobile } from "../../globalStyle.jsx";

function Layout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
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
  ${minMobile} {
    flex-direction: row;
  }
`;
const Container = styled("div")`
  margin-bottom: 2.5rem;
  padding: 0 1.5rem;
  ${minMobile} {
    max-width: 730px;
    width: 100%;
    margin: 0 auto 2.5rem auto;
    margin-left: auto;
    width: calc(100vw - 6.375rem);
    padding: 0;
  }
`;
