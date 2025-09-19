import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/Product/${product.id}`}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>{product.id}</Card.Title>
          <Card.Text>
            Category: {product.category}
          </Card.Text>
          <Card.Text>
            Price: ${product.price}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;