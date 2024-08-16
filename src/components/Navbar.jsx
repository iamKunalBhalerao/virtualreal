import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";
import { navItems } from "../constants/index.jsx";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrower, setMobileDrower] = useState(false);

  const toggleNavbar = () => {
    setMobileDrower(!mobileDrower);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white shadow-md">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="logo flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrower ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrower && (
          <div className="fixed right-0 z-20 bg-neutral-200 w-full p-12 flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border border-slate-700 rounded-md"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 border bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
