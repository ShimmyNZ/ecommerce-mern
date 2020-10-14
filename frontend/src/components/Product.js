import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "../components/Rating"

const Product = ({ product }) => {
  return (
    <Card className="product-card my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <Rating value={product.rating} reviews={product.numReviews} />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
