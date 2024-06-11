import Card from "./Projects/Card";
import wave from "../../public/Svg/layered-waves-haikei.svg";
import Image from "next/image";
import projects from "./Projects/projects.json";

export default function Projects() {
  console.log(projects);
  return (
    <section
      className="bg-secondary text-black text-3xl flex flex-col items-center"
      id="projects"
    >
      <div className="h-full mt-24">
        <hr className="w-screen border-b-2 border-neutral-300 mb-3"></hr>
        <h2 className="w-screen font-bold text-primary text-center my-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-screen justify-items-center gap-7 mt-10 px-20">
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              img={project.image}
              desc={project.description}
            />
          ))}
        </div>
        <Image src={wave} className="w-screen" />
      </div>
    </section>
  );
}
