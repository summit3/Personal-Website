import Card from "./Projects/Card";
import wave from "../../public/Svg/layered-waves-haikei.svg";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-secondary text-black text-3xl flex flex-col items-center">
      <div className="h-100%">
        <hr className="w-screen border-b-2 border-neutral-300 mb-3"></hr>
        <h2 className="w-screen font-bold text-primary text-center my-10">
          Projects
        </h2>
        <div className="grid grid-cols-3 w-screen justify-items-center mt-10 px-20">
          <Card />
          <Card />
          <Card />
        </div>
        <Image src={wave} className="w-screen" />
      </div>
    </section>
  );
}
