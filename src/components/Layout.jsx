import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orangered;
  }
`;

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/dogs">Collection</StyledLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
