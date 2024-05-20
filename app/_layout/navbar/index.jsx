"use client";

import { StyledNavbarContainer } from "@app/_layout/navbar/navbar.styled";
import NavLeft from "./navLeft";

const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <div className="navbar_grid">
        <NavLeft />
      </div>
    </StyledNavbarContainer>
  );
};

export default Navbar;
