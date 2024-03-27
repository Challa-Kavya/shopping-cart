import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgzEk_N28GTwZVz4yUl62JSY8dEZIepdEbg&usqp=CAU', price: 10 },
  { id: 2, name: 'Product 2', image: 'https://images-cdn.ubuy.co.in/633aafd28e0b4f46652baacc-tropicana-juice-drink-grape-182-4-fl.jpg', price: 20 },
  { id: 3, name: 'Product 3', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/26921a.jpg?ts=1705312832', price: 30 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} height={200} width={300}/>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} height={200} width={300}/>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <p>Total: ${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
