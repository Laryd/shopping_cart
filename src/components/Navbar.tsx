import React from "react";
import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Nav.Link
        className="navbar-brand text-warning
      "
        to="/"
        as={NavLink}
      >
        Gossipert Shop
      </Nav.Link>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <FiShoppingCart />

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
