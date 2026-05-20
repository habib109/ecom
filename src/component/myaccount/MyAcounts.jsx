import React from 'react';
import { Link } from 'react-router-dom';

const MyAcounts = () => {
  const accountOptions = [
    { label: 'My Account', href: '/account' },
    { label: 'My Wish List (0)', href: '/wishlist' },
    { label: 'Compare (0)', href: '/compare' },
    { label: 'Create an Account', href: '/register' },
    { label: 'Sign In', href: '/login' }
  ];

  return (
    <div className="animate-dropdown absolute top-full right-0 mt-3 z-50 w-[230px] bg-white border-1 border-[#CACDD8] shadow-lg rounded-md px-5 py-4">
      {accountOptions.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="block text-sm py-2 text-black hover:text-blue-600"
        >
          {item.label}
        </Link>
      ))}
      <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-l border-t border-[#CACDD8]" />
    </div>
  );
};

export default MyAcounts;
