import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HostelSelection = () => {
  const navigate = useNavigate();
  const [selectedHostel, setSelectedHostel] = useState('');

  const hostels = [
    { id: 1, name: "Boys Hostel Block A", capacity: "200 rooms" },
    { id: 2, name: "Boys Hostel Block B", capacity: "180 rooms" },
    { id: 3, name: "Girls Hostel Block A", capacity: "150 rooms" },
    { id: 4, name: "Girls Hostel Block B", capacity: "160 rooms" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedHostel) {
      navigate('/item-listings');
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-sky-50 via-rose-50 to-amber-50 pt-28 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-40 pointer-events-none [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      <div className="top-20 right-20 absolute bg-pink-200 opacity-40 blur-3xl rounded-full w-96 h-96 animate-blob mix-blend-multiply filter"></div>
      <div className="top-40 -left-20 absolute bg-sky-200 opacity-40 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>

      <div className="relative mx-auto px-4 py-8 container">
        <div className="bg-white/20 shadow-xl backdrop-blur-md mx-auto p-8 border border-white/30 rounded-3xl max-w-2xl">
          <h1 className="bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-6 font-bold text-transparent text-4xl">
            Select Your Hostel
          </h1>
          
          <p className="mb-8 text-gray-700 text-lg">
            Please choose your preferred hostel from the options below:
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block font-medium text-gray-700 text-lg">
                Available Hostels
              </label>
              <select
                value={selectedHostel}
                onChange={(e) => setSelectedHostel(e.target.value)}
                className="bg-white/50 backdrop-blur-sm p-4 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-700"
                required
              >
                <option value="">Select a hostel</option>
                {hostels.map((hostel) => (
                  <option key={hostel.id} value={hostel.id}>
                    {hostel.name} - {hostel.capacity}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={!selectedHostel}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium text-lg
                ${selectedHostel ? 'hover:shadow-lg hover:scale-[1.02]' : 'opacity-50 cursor-not-allowed'}
                transition-all duration-300`}
            >
              Continue to Items
            </button>
          </form>

          <div className="bg-blue-50/50 mt-6 p-4 border border-blue-100 rounded-xl">
            <h3 className="mb-2 font-medium text-blue-800">Note:</h3>
            <p className="text-blue-700 text-sm">
              Your hostel selection will determine the available items and services in your area.
              You can change your hostel selection later from your profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelSelection;