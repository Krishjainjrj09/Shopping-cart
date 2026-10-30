
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <h2>Our Products</h2>

        <Form.Group>
          <Form.Label className="mb-1">
            Filter by Category
          </Form.Label>

          <Form.Select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              lg={4}
              className="mb-4"
            >
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No products found in this category.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ProductList;
