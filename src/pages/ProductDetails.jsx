import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} />

      <p>{product.description}</p>

      <h3>Price: {product.price} Kč</h3>
    </div>
  );
}