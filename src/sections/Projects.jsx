import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { useMotionValue } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>


      <div className="grid grid-cols-2 gap-4 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="pl-6 grid md:grid-cols-5  justify-between  items-center bg-gradient-to-b from-storm to-indigo rounded-2xl md:col-span-2 md:row-span-2 gap-2">
          {/* Left: Header */}
          <div className="flex py-6 h-full w-full">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
          </div>
          {/* Middle: Description */}
          <div className="flex py-6 h-full w-full col-span-2">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit. Etiam dapibus diam ac varius venenatis. Integer lacinia pretium sapien vitae auctor. Integer tincidunt nisl quis magna lacinia euismod. In id tempus turpis, eget sodales enim. Nunc ex dolor, ultricies eget risus eget, imperdiet facilisis odio. Curabitur id egestas felis. Nam lacinia, mi et pellentesque mattis, felis neque aliquam magna, at mollis nibh nibh in augue.
            </p>
          </div>
          {/* Right: Video */}
          <div className="h-full col-span-2">
            <video
              src="/assets/videos/JohnDice.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-r-2xl shadow-lg"
            />
          </div>
        </div>
        {/* Grid 2 */}
        <div className="pt-6 justify-between h-auto row-span-3 items-center bg-gradient-to-b from-storm to-indigo rounded-2xl gap-2">
          <div className="flex flex-col w-full h-full">
            <div className="px-6 grid grid-cols-2">
              <h3 className="font-bold text-2xl md:text-4xl">Game Development</h3>
              <p className="text-base md:text-lg">
                Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit. Etiam dapibus diam ac varius venenatis. Integer lacinia pretium sapien vitae auctor. Integer tincidunt nisl quis magna lacinia euismod. In id tempus turpis, eget sodales enim. Nunc ex dolor, ultricies eget risus eget, imperdiet facilisis odio.
              </p>
            </div>

            <div className="h-full w-full mt-4">
              <img src="assets\projects\scoreboard.png" alt="" className="rounded-b-2xl w-full h-full object-cover" />
            </div>


          </div>

        </div>
        {/* Grid 3 */}
        <div className="pb-6 justify-between h-auto row-span-3 items-center bg-gradient-to-b from-storm to-indigo rounded-2xl gap-2">
          <div className="flex flex-col w-full h-full">
            <div className="h-full w-full mb-4">
              <img src="assets\projects\firstpersontemplate.png" alt="" className="rounded-t-2xl w-full h-full object-cover" />
            </div>
            <div className="px-6 grid grid-cols-2">
              <h3 className="font-bold text-2xl md:text-4xl">Game Development</h3>
              <p className="text-base md:text-lg h-400">
                Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit. Etiam dapibus diam ac varius venenatis. Integer lacinia pretium sapien vitae auctor. Integer tincidunt nisl quis magna lacinia euismod.
              </p>
            </div>
          </div>

        </div>
        {/* Grid 4 */}
        <div className="pr-6 grid md:grid-cols-5  justify-between  items-center bg-gradient-to-b from-storm to-indigo rounded-2xl md:col-span-2 md:row-span-2 gap-2">

          <div className="h-full col-span-2">
            <video
              src="\assets\videos\LightZero.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-l-2xl shadow-lg"
            />
          </div>
          <div className="ml-2 flex py-6 h-full w-full">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
          </div>
          <div className="flex py-6 h-full w-full col-span-2">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit. Etiam dapibus diam ac varius venenatis. Integer lacinia pretium sapien vitae auctor. Integer tincidunt nisl quis magna lacinia euismod. In id tempus turpis, eget sodales enim. Nunc ex dolor, ultricies eget risus eget, imperdiet facilisis odio. Curabitur id egestas felis. Nam lacinia, mi et pellentesque mattis, felis neque aliquam magna, at mollis nibh nibh in augue.
            </p>
          </div>

        </div>
        {/* Grid 5 */}
        <div className="pl-6 flex justify-between items-center bg-gradient-to-b from-storm to-indigo rounded-2xl md:col-span-2">
          <div className="flex py-6 h-full w-full">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
          </div>
          <div className="flex py-6 h-full w-full col-span-2">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor.
            </p>
          </div>
          <div className="h-full w-500 col-span-2">
            <img
              src="assets/projects/TacticalShooter.png"
              className="w-full h-full object-cover rounded-r-2xl shadow-lg"
            />
          </div>


        </div>
        {/* Grid 6 */}
        <div className="pr-6 flex justify-stretch  items-center bg-gradient-to-b from-storm to-indigo rounded-2xl md:col-span-2">
          <div className="h-full w-500 col-span-2 mr-3">
            <img
              src="assets/projects/TacticalShooter.png"
              className="w-full h-full object-cover rounded-l-2xl shadow-lg"
            />
          </div>
          <div className="flex py-6 h-full w-full">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
          </div>
          <div className="flex py-6 h-full w-full col-span-2">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor.
            </p>
          </div>


        </div>

        {/* Grid 7 */}
        <div className="pl-6 grid md:grid-cols-5  justify-between  items-center bg-gradient-to-b from-storm to-indigo rounded-2xl md:col-span-2 md:row-span-2 gap-2">
          <div className="flex py-6 h-full w-full">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
          </div>
          <div className="flex py-6 h-full w-full col-span-2">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit. Etiam dapibus diam ac varius venenatis. Integer lacinia pretium sapien vitae auctor. Integer tincidunt nisl quis magna lacinia euismod. In id tempus turpis, eget sodales enim. Nunc ex dolor, ultricies eget risus eget, imperdiet facilisis odio. Curabitur id egestas felis. Nam lacinia, mi et pellentesque mattis, felis neque aliquam magna, at mollis nibh nibh in augue.
            </p>
          </div>
          <div className="h-full col-span-2">
            <video
              src="\assets\videos\PixelAdventure.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-r-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Grid 8 */}
        <div className="pb-6 flex flex-col justify-start  items-center bg-gradient-to-b from-storm to-indigo rounded-2xl md:col-span-2 md:row-span-3 gap-2">
          <div className="h-120 w-full">
            <video
              src="\assets\videos\Schmeggs.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-t-2xl shadow-lg"
            />
          </div>
          <div className="flex px-6 w-full my-10">
            <h3 className="font-bold text-2xl md:text-4xl">MskJaw "John" Dice</h3>
          </div>
          {/* Middle: Description */}
          <div className="flex px-6 h-full w-full">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque erat quis dapibus lobortis. Sed nulla arcu, facilisis ac egestas quis, porttitor et ligula. Aliquam quis turpis eleifend, mollis ligula ut, tempor orci. Donec luctus tortor vitae dui ullamcorper, vitae viverra nibh porttitor. Vestibulum mollis maximus est eu blandit. Etiam dapibus diam ac varius venenatis. Integer lacinia pretium sapien vitae auctor. Integer tincidunt nisl quis magna lacinia euismod. In id tempus turpis, eget sodales enim. Nunc ex dolor, ultricies eget risus eget, imperdiet facilisis odio. Curabitur id egestas felis. Nam lacinia, mi et pellentesque mattis, felis neque aliquam magna, at mollis nibh nibh in augue.
            </p>
          </div>
        </div>

      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
