
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { clearCart } from "../redux/cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Shopping Cart</h2>
          <p className="text-secondary mb-0">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length > 0 && (
          <Button
            variant="outline-danger"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <Card className="text-center p-5 shadow-sm">
          <Card.Body>
            <h4>Your cart is empty!</h4>
            <p className="text-secondary mb-0">
              Add some products to get started.
            </p>
          </Card.Body>
        </Card>
      ) : (
        <Row className="g-4">
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Body>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h5 className="fw-bold mb-4">Cart Summary</h5>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items</span>
                  <strong>{totalItems}</strong>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <strong>{formatPrice(totalPrice)}</strong>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Delivery</span>
                  <strong className="text-success">Free</strong>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <h5>Total Price</h5>
                  <h5 className="text-success">
                    {formatPrice(totalPrice)}
                  </h5>
                </div>

                <Button
                  variant="dark"
                  className="w-100"
                  onClick={() =>
                    window.alert(
                      "Checkout is a demo. No payment will be processed."
                    )
                  }
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}
