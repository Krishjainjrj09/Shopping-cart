
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="cart-item d-flex align-items-center gap-3 py-3">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="flex-grow-1">
        <h6 className="mb-1 fw-bold">{item.name}</h6>

        <p className="text-secondary small mb-2">
          {formatPrice(item.price)} each
        </p>

        <div className="d-flex align-items-center gap-2">
          <Button
            variant="outline-secondary"
            size="sm"
            disabled={item.quantity <= 1}
            aria-label={`Decrease quantity of ${item.name}`}
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            −
          </Button>

          <span className="fw-bold">{item.quantity}</span>

          <Button
            variant="outline-secondary"
            size="sm"
            aria-label={`Increase quantity of ${item.name}`}
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </Button>
        </div>
      </div>

      <div className="text-end">
        <div className="fw-bold">
          {formatPrice(item.price * item.quantity)}
        </div>

        <Button
          variant="link"
          className="text-danger p-0 mt-2 small"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
