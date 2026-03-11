import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-green-700">
          Insect Museum
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium
        text-gray-800 dark:text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Database</li>
          <li>Blog</li>
          <li>Experience</li>
          <li>Credits</li>
          <li>Contact Us</li>
        </ul>

        {/* Buttons Desktop */}
        <div className="hidden md:flex gap-3 " >
          <button className="bg-green-600 text-white px-4 py-1 rounded">
            Book Ticket
          </button>
          <button className="border px-4 py-1 rounded text-gray-800 dark:text-white">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl "
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Database</li>
            <li>Blog</li>
            <li>Experience</li>
            <li>Credits</li>
            <li>Contact Us</li>
          </ul>

          <div className="flex flex-col gap-2 mt-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Book Ticket
            </button>
            <button className="border px-4 py-2 rounded text-gray-800 dark:text-white">
  Log In
</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;