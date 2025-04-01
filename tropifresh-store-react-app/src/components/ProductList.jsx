import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <>
      <section className="single-product">
        <div className="product-container">
          <img src={image} alt={name} className="product-image" />
          <div className="product-details">
            <h3 className="product-title">{name}</h3>
            <p className="product-price">${price}</p>
            {/* <p className="product-description">{description}</p> */}
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};

function ProductList() {
  const products = [
    {
      name: "Green Punch",
      price: "6.00",
      image: "../public/images/product-1.jpeg",
    },
    {
      name: "Apple Citrus",
      price: "6.00",
      image: "../public/images/product-2.jpeg",
    },
    {
      name: "Orange Zest",
      price: "6.00",
      image: "../public/images/product-3.jpeg",
    },
    {
      name: "Pink Grapefruit",
      price: "6.00",
      image: "../public/images/product-4.jpeg",
    },
    {
      name: "Ginger Tangerine",
      price: "6.00",
      image: "../public/images/product-5.jpeg",
    },
    {
      name: "Raspberry Lime",
      price: "6.00",
      image: "../public/images/product-6.jpeg",
    },
  ];
  return (
    <>
      <section className="product-list-container">
        <h2 className="product-list-title">TropiFresh Juices</h2>
        <p className="product-list-subtitle">
          Cold-pressed, 100% organic, packed with vitamins, nutrients, and
          natural goodness.
        </p>
        <div className="product-list">
          {products.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </section>
      <hr className="product-list-line" />
    </>
  );
}

export default ProductList;
