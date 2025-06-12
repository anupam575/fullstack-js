import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { name: 'Apple', title: 'Fresh Apple', price: 100 },
    { name: 'Banana', title: 'Yellow Banana', price: 50 },
    { name: 'Orange', title: 'Juicy Orange', price: 80 },
    { name: 'Mango', title: 'Sweet Mango', price: 120 },
    { name: 'Grapes', title: 'Green Grapes', price: 90 },
    { name: 'Pineapple', title: 'Tropical Pineapple', price: 150 },
    { name: 'Strawberry', title: 'Red Strawberry', price: 200 },
    { name: 'Watermelon', title: 'Big Watermelon', price: 180 },
    { name: 'Papaya', title: 'Ripe Papaya', price: 70 },
    { name: 'Kiwi', title: 'Fresh Kiwi', price: 130 },
  ];

  const filteredProducts = products.filter((produ) =>
    produ.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPrice = filteredProducts.reduce((acc, produ) => acc + produ.price, 0);

  return (
    <div>
      <h2>Product List</h2>

            <input
      type='text'
      placeholder='prduct search'
      value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}

      
      
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.title} - ₹{product.price}
          </li>
        ))}
      </ul>

      <div>
        Total Price: ₹{totalPrice}
      </div>
    </div>
  );
}

export default App;
//ये function setSearchTerm को call करता है और जो भी अभी लिखा है उसे searchTerm में स्टोर कर देता है।

