function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">

      <h1 className="text-xl font-bold">
        Insect Museum
      </h1>

      <ul className="hidden md:flex gap-6">
        <li>Home</li>
        <li>About Us</li>
        <li>Database</li>
        <li>Blog</li>
        <li>Experience</li>
        <li>Credits</li>
        <li>Contact Us</li>
      </ul>

      <div className="flex gap-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Book Ticket
        </button>

        <button className="border px-4 py-2 rounded">
          Log In
        </button>
      </div>

    </nav>
  )
}

export default Navbar