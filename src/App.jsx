import React, { Suspense } from "react";
import Navbar from "./sections/Navbar.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experiences from "./sections/Experiences.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from './sections/Footer.jsx';

// Hero component is lazy-loaded
const Hero = React.lazy(() => import('./sections/Hero'));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      
      {/* FIX: Add the <Suspense> component here.
        It will show a fallback UI while the lazy-loaded Hero component is loading.
      */}
      <Suspense fallback={<div className="h-screen w-full flex justify-center items-center">Loading...</div>}>
        <Hero />
      </Suspense>

      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
