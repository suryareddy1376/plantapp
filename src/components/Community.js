import React, { useEffect, useState } from 'react';

const Community = () => {
  const [communityPages, setCommunityPages] = useState([]);

  useEffect(() => {
    // Fetch community pages data
    const fetchCommunityPages = async () => {
      try {
        const response = await fetch('/api/community-pages');
        const data = await response.json();
        setCommunityPages(data);
      } catch (error) {
        console.error('Error fetching community pages:', error);
      }
    };

    fetchCommunityPages();
  }, []);

  return (
    <div>
      <h1>Community Pages</h1>
      <ul>
        {communityPages.map((page) => (
          <li key={page.id}>
            {page.title} - {page.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
