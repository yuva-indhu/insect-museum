import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setDarkMode(prev => !prev);
    }, 5000); // switch theme every 5 seconds

    return () => clearInterval(interval);

  }, []);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>

      <Navbar />
      <AnnouncementBar />
      <Hero />
      <About />
      <Experience />
      <Footer />

    </div>
  );
}

export default App;