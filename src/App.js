import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <UserCard user={user} />
    </div>
  );
};

export default App;