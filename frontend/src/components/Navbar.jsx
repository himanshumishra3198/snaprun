import React from "react";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 items-center h-16  pb-4 text-white">
      {/* Left - Placeholder for any logo or additional items */}
      <div>SnapRun</div>

      {/* Center - Run Button */}
      <div className="text-center">
        <button className="bg-green-950 text-white py-2 px-4 rounded">
          Run
        </button>
      </div>

      {/* Right - Sign Up and Sign In */}
      <div className="flex justify-end space-x-4">
        <button className="bg-green-950 text-white py-2 px-4 rounded">
          Sign Up
        </button>
        <button className="bg-green-950 text-white py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
