import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Punch",
      price: 6.0,
      quantity: 1,
      image: "../public/images/product-1.jpeg",
    },
    {
      id: 2,
      name: "Pink Grapefruit",
      price: 6.0,
      quantity: 2,
      image: "../public/images/product-4.jpeg",
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <button className="continue-shopping-button">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    {item.quantity}
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-item-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Total: ${calculateTotal()}</h3>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <hr className="cart-line" />
    </>
  );
};

export default Cart;
