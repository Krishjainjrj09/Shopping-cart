
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <Card className="h-100 shadow-sm product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Subtitle className="mb-2 text-secondary">
          {product.category}
        </Card.Subtitle>

        <Card.Title>{product.name}</Card.Title>

        <Card.Text className="text-secondary">
          {product.description}
        </Card.Text>

        <h5 className="product-price mt-auto">
          {formatPrice(product.price)}
        </h5>

        <Button
          variant="dark"
          className="w-100 mt-2"
          onClick={() => dispatch(addToCart(product))}
        >
          {cartItem
            ? `Add More (${cartItem.quantity} in cart)`
            : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}
