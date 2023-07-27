import React from "react";
import { styled } from "goober";
import { Link } from "react-router-dom";
import { minMobile } from "../../globalStyle.jsx";

function Sidebar() {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <img src="/images/favicon.png" alt="Try Maxi" />
        </Link>
      </LogoContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light);
  transition: background-color 400s ease-in-out;
  z-index: 10;
  ${minMobile} {
    flex-direction: column;
    min-height: 100vh;
    min-width: 6.375rem;
    border-radius: 0 var(--br-lg) var(--br-lg) 0;
    position: fixed;
    top: 0;
  }
`;

const LogoContainer = styled("div")`
  padding: 1rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  ${minMobile} {
    padding: 1.9375rem;
  }
`;