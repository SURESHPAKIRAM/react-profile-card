import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto border border-gray-300">
      <div className="flex items-center">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-24 h-24 border-2 border-gray-300"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Gender: </span>{user.gender}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Phone: </span>{user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;