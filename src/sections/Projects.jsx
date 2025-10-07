import { useState } from "react";
// Removed unused imports: Project, myProjects, useMotionValue
// If you plan to use them later, you can add them back.

const Projects = () => {
  // The mouse move logic is fine, but it was not used in the JSX provided.
  // I'm keeping it in case you are using it with the 'Project' component that was commented out.
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const handleMouseMove = (e) => {
  //   x.set(e.clientX + 20);
  //   y.set(e.clientY + 20);
  // };

  return (
    // onMouseMove={handleMouseMove} // Re-add this if you use the mouse move logic
    <section className="relative c-space section-spacing">
      <h2 className="text-heading text-3xl md:text-4xl">My Selected Projects</h2>

      {/* Main grid now stacks on mobile and goes to 2 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">

        {/* Grid 1: MskJaw "John" Dice */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:row-span-2 lg:col-span-2 flex flex-col lg:flex-row overflow-hidden">
          {/* Text content */}
          <div className="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
            <p className="text-base md:text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit.
            </p>
          </div>
          {/* Video content */}
          <div className="lg:w-4/5">
            <video
              src="/assets/videos/JohnDice.webm"
              autoPlay loop muted playsInline loading="lazy"
              className="w-full h-full object-cover rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none shadow-lg"
            />
          </div>
        </div>

        {/* Grid 2: Game Development (Scoreboard) */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:row-span-3 flex flex-col overflow-hidden">
          <div className="p-6 lg:p-8">
            <h3 className="font-bold text-2xl md:text-4xl">Game Development</h3>
            <p className="text-base md:text-lg mt-4">
              Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor.
            </p>
          </div>
          <div className="flex-grow">
            <img src="assets/projects/scoreboard.png" alt="Game scoreboard project" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Grid 3: Game Development (First Person) */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:row-span-3 flex flex-col overflow-hidden">
          <div className="flex-grow">
            <img src="/assets/projects/firstpersontemplate.png" alt="First person game template" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 lg:p-8">
            <h3 className="font-bold text-2xl md:text-4xl">Game Development</h3>
            <p className="text-base md:text-lg mt-4">
              Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit.
            </p>
          </div>
        </div>

        {/* Grid 4: LightZero */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:col-span-2 lg:row-span-2 flex flex-col-reverse lg:flex-row overflow-hidden">
          {/* Text content */}
          <div className="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5">
            <h3 className="font-bold text-2xl md:text-4xl">LightZero</h3>
            <p className="text-base md:text-lg mt-4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor.
            </p>
          </div>
          {/* Video content */}
          <div className="lg:w-6/5">
            <video
              src="/assets/videos/LightZero.webm"
              autoPlay loop muted playsInline loading="lazy"
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-r-2xl lg:rounded-t-none shadow-lg"
            />
          </div>
        </div>

        {/* Grid 5: Tactical Shooter (Image Right) */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:col-span-2 flex flex-col lg:flex-row items-center overflow-hidden">
          <div className="p-6 lg:p-8 lg:w-1/2">
            <h3 className="font-bold text-2xl md:text-4xl">Tactical Shooter</h3>
            <p className="text-base md:text-lg mt-4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/projects/TacticalShooter.png"
              alt="Tactical shooter game"
              loading="lazy"
              className="w-full h-full object-cover rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none shadow-lg"
            />
          </div>
        </div>

        {/* Grid 6: Project Six (Image Left) */}

        
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:col-span-2 lg:row-span-2 flex flex-col lg:flex-row overflow-hidden">
          <div className="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5">
            <h3 className="font-bold text-2xl md:text-4xl">Pixel Adventure</h3>
            <p className="text-base md:text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper.
            </p>
          </div>
          <div className="lg:w-2/5">
            <img
              src="/assets/projects/TacticalShooter.png"
              autoPlay loop muted playsInline
              className="w-full h-full object-cover rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none shadow-lg"
              />
          </div>
        </div>
        {/* Grid 7: Pixel Adventure */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:col-span-2 flex flex-col-reverse lg:flex-row items-center overflow-hidden">
          <div className="w-full lg:w-4/5">
            <video
              src="/assets/videos/PixelAdventure.webm"
              autoPlay loop muted playsInline
              className="w-full h-full object-cover rounded-b-2xl lg:rounded-l-2xl lg:rounded-b-none shadow-lg"
            />
          </div>
          <div className="p-6 lg:p-8 lg:w-1/2">
            <h3 className="font-bold text-2xl md:text-4xl">Pixel Adventure</h3>
            <p className="text-base md:text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula.
            </p>
          </div>
        </div>


        {/* Grid 8: Schmeggs */}
        <div className="bg-gradient-to-b from-storm to-indigo rounded-2xl lg:col-span-2 lg:row-span-3 flex flex-col overflow-hidden">
            <div className="h-96">
                <video
                    src="/assets/videos/Schmeggs.webm"
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 lg:p-8">
                <h3 className="font-bold text-2xl md:text-4xl">Schmeggs</h3>
                <p className="text-base md:text-lg mt-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit.
                </p>
            </div>
        </div>
      </div>

      {/* This divider and mapping logic was in your original code, kept here for completeness */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {/* {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))} */}
    </section>
  );
};

export default Projects;
