import React from 'react';

const HostelSelection = () => {
  return (
    <div className="mx-auto p-4 container">
      <h1 className="mb-4 font-bold text-2xl">Select Your Hostel</h1>
      <p className="mb-4">Please choose your preferred hostel from the list below:</p>
      {/* Add hostel selection logic here */}
      <ul className="pl-5 list-disc">
        <li>Hostel A</li>
        <li>Hostel B</li>
        <li>Hostel C</li>
      </ul>
    </div>
  );
};

export default HostelSelection;