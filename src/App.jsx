import React, { Suspense } from "react";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

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
