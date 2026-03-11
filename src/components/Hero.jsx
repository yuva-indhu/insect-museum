function Hero() {
  return (
    <section id="home" className="text-center py-20 px-4">

      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        alt="Insect Museum"
        className="mx-auto w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
      />

      <h1 className="text-4xl md:text-5xl font-bold mt-6">
        INSECT MUSEUM
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Visit the museum in person or explore it virtually
      </p>

      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
        Explore Now
      </button>

    </section>
  )
}

export default Hero