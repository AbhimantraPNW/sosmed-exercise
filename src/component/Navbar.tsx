import { Button } from "@/components/ui/button";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-sky-400">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-4 items-center">
          <h1 className="cursor-pointer text-2xl text-white font-bold">TWITTOR</h1>
          
          <div className="flex gap-4">
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
