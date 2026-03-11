function Experience() {

  const experiences = [
  {
    title: "Interactive Exhibits",
    desc: "Explore insects through interactive displays.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
  },
  {
    title: "Research Collection",
    desc: "Discover rare insect species preserved for research.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    title: "Educational Tours",
    desc: "Guided tours for students to learn about insect ecosystems.",
    img: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
  }
]

  return (
    <section id="experience" className="p-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {experiences.map((exp, index) => (
          <div
  key={index}
  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden"
>

            <img
              src={exp.img}
              alt={exp.title}
              className="w-full h-48 object-cover"
/>

            <div className="p-5">

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
  {exp.title}
</h3>
<p className="mt-2 text-gray-600 dark:text-gray-300">
  {exp.desc}
</p>

              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read More
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Experience