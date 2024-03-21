
import React from "react";

const Navbar = () => {
  
  return (
    <nav>
      <div className="container mx-auto px-4 bg-blue-300">
        <div className="flex items-center justify-between py-4">
          <h1 className="cursor-pointer text-2xl font-bold">TWITLALALA</h1>

          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8 mr-10">
              <h3>Profile</h3>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
