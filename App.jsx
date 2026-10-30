
import { useState } from "react";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [activePage, setActivePage] = useState("products");

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand
            className="fw-bold fs-4"
            role="button"
            onClick={() => setActivePage("products")}
          >
            Cartify
          </Navbar.Brand>

          <div className="d-flex gap-2">
            <Button
              variant={activePage === "products" ? "light" : "outline-light"}
              onClick={() => setActivePage("products")}
            >
              Products
            </Button>

            <Button
              variant={activePage === "cart" ? "light" : "outline-light"}
              onClick={() => setActivePage("cart")}
            >
              Cart <Badge bg="success">{totalItems}</Badge>
            </Button>
          </div>
        </Container>
      </Navbar>

      <main className="app-main">
        {activePage === "products" ? (
          <ProductList />
        ) : (
          <Cart />
        )}
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          © 2026 Cartify | React + Redux Toolkit Shopping Cart
        </p>
      </footer>
    </>
  );
}
