import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-customNavy1 text-white w-20 h-20 mb-4 shadow-lg">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="text-5xl font-bold text-customNavy1">404</h1>
        <p className="mt-2 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          It might have been moved or deleted.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-customNavy px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-opacity-90"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
