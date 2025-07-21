import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: blue;
  }
`;

const Layout = () => {
  return (
    <div>
      <header>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/products-partners">
            Products from partners
          </StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </StyledNav>
      </header>
      <main>
        <Suspense fallback={<div>...loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
