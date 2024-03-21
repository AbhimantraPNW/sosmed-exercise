import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-sky-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <h1 className="cursor-pointer text-2xl font-bold text-white">
              TWITTOR
            </h1>
          </Link>

          <div className="flex gap-4">
            <Button>Login</Button>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
