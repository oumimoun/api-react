import React from 'react';

function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: ${props.price.toFixed(2)}</p>
      <button onClick={props.onClick}>Add to cart</button>
    </div>
  );
}

function ProductList() {
  const products = [
    { id: 1, name: 'Product A', description: 'This is a description for Product A', price: 9.99 },
    { id: 2, name: 'Product B', description: 'This is a description for Product B', price: 19.99 },
    { id: 3, name: 'Product C', description: 'This is a description for Product C', price: 29.99 },
  ];

  function handleAddToCart(id) {
    console.log(`Product ${id} added to cart!`);
  }

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <Product key={product.id} {...product} onClick={() => handleAddToCart(product.id)} />
      ))}
    </div>
  );
}

export default ProductList;
