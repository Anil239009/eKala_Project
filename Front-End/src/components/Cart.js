import React, { useState } from 'react';
import '../css/cart.css';

export default function Cart(props) {
  const [counts, setCounts] = useState([1, 1, 1]); // State for counts of each product
  const price = 100; // Assuming the initial price is 100

  function increase(index) {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  }

  function decrease(index) {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index]--;
      setCounts(newCounts);
    }
  }

  function getPrice(index) {
    return counts[index] * price;
  }

  function handleDelete(index) {
    // Handle delete functionality
  }

  function handleBuyNow() {
    // Handle buy now functionality
  }

  // Function to calculate the total price
  function calculateTotalPrice() {
    return counts.reduce((total, count) => total + count * price, 0);
  }

  return (
    <div className="bg-cart cart-out-container">
      <div className="cart-in-container">
        <h1 className="text-center">Your Cart</h1>
        <div className="container text-center align-items-center">
         {[...Array(3)].map((_, index) => (
            <div className="row p-3" key={index} >
              <div className="col-lg-3">
                <div>
                    Product Name
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-secondary col"
                    onClick={() => decrease(index)}
                  >
                    <strong>-</strong>
                  </button>
                  <div className="col">{counts[index]}</div>
                  <button
                    type="button"
                    className="col btn btn-secondary"
                    onClick={() => increase(index)}
                  >
                    <strong>+</strong>
                  </button>
                </div>
              </div>
              <div className="col-lg-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
              <div className="col-lg-3">{getPrice(index)}</div>
              {/* Display calculated price */}
            </div>
          ))}
          <div className="row">
            <div className="col-lg-3">Total price</div>
            <div className="col-lg-6"></div>
            <div className="col-lg-3">{calculateTotalPrice()}</div>
            {/* Display total price */}
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
