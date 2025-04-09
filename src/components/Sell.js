import React, { useState } from 'react';

const Sell = () => {
  const [plantDetails, setPlantDetails] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Plant details submitted:', plantDetails);
  };

  return (
    <div>
      <h1>Sell Your Plants</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Plant Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={plantDetails.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={plantDetails.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={plantDetails.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sell;
