import React, { useState } from 'react';

const AddressCard = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [addressType, setAddressType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = {
      city,
      country,
      address1: add1,
      address2: add2,
      zipCode,
      addressType,
    };
    console.log(addressData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Address Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            />
          </div>
          <input
            type="text"
            placeholder="Address Line 1"
            value={add1}
            onChange={(e) => setAdd1(e.target.value)}
            className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={add2}
            onChange={(e) => setAdd2(e.target.value)}
            className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            />
            <select
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
              className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            >
              <option value="" className="text-gray-400">Address Type</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Shipping">Shipping</option>
              <option value="Billing">Billing</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressCard;