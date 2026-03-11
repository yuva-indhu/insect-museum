function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {/* Museum Name */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Insect Museum</h2>
          <p className="text-gray-400">
            Discover the fascinating world of insects through
            interactive exhibits and educational tours.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Chennai, Tamil Nadu</p>
          <p className="text-gray-400">info@insectmuseum.com</p>
          <p className="text-gray-400">+91 98765 43210</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4 text-2xl">
  <a href="#"><i className="fa-brands fa-facebook"></i></a>
  <a href="#"><i className="fa-brands fa-instagram"></i></a>
  <a href="#"><i className="fa-brands fa-twitter"></i></a>
  <a href="#"><i className="fa-brands fa-youtube"></i></a>
</div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2026 Insect Museum. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer