import React, { useEffect, useState } from 'react';

const Explore = () => {
  const [nearbySellers, setNearbySellers] = useState([]);

  useEffect(() => {
    // Fetch nearby sellers data
    const fetchNearbySellers = async () => {
      try {
        const response = await fetch('/api/nearby-sellers');
        const data = await response.json();
        setNearbySellers(data);
      } catch (error) {
        console.error('Error fetching nearby sellers:', error);
      }
    };

    fetchNearbySellers();
  }, []);

  return (
    <div>
      <h1>Explore Nearby Sellers</h1>
      <ul>
        {nearbySellers.map((seller) => (
          <li key={seller.id}>
            {seller.name} - {seller.distance} km away
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
