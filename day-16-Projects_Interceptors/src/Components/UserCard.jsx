import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Header */}
      <div className="bg- gradient-to-r from-blue-600 to-purple-600 h-28 relative">
        {/* Profile Image */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="pt-16 px-6 pb-6 text-center">
        
        <h2 className="text-2xl font-bold text-gray-800 capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-gray-500 mt-1">
          @{user.username}
        </p>

        {/* Details */}
        <div className="mt-6 space-y-3 text-left">

          {/* Email */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <span className="text-blue-600 text-lg">✉</span>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-medium text-gray-700">
                {user.email}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <span className="text-green-600 text-lg">☎</span>
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="text-sm font-medium text-gray-700">
                {user.phone}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <span className="text-red-500 text-lg">📍</span>
            <div>
              <p className="text-xs text-gray-400">Address</p>
              <p className="text-sm font-medium text-gray-700 capitalize">
                {user.address.street}, {user.address.city}
              </p>
            </div>
          </div>

        </div>

        {/* Button */}
        <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-300">
          View Profile
        </button>

      </div>
    </div>
  );
};

export default UserCard;