import Image from "next/image";
import wave from "../../public/Svg/layered-waves-haikei-2.svg";

export default function Contact() {
  return (
    <section className="h-screen bg-primary relative grid grid-rows-2 w-screen">
      <Image
        src={wave}
        className="w-screen absolute top-0 rotate-180 row-start-1"
      />
      <h2 className="w-screen font-bold text-secondary text-center mb-16 z-10 text-3xl mt-60">
        Contact
      </h2>
    </section>
  );
}
