import Image from "next/image";
import wave from "../../public/Svg/layered-waves-haikei-2.svg";
import email from "../../public/Svg/email.svg";
import tiktok from "../../public/Svg/tiktok.svg";
import instagram from "../../public/Svg/instagram.svg";
import Blob from "./Landing/Blob-white.jsx";

export default function Contact() {
  return (
    <section className="h-screen w-screen bg-primary grid grid-cols-2 grid-rows-2 relative">
      <Image src={wave} className="w-screen absolute top-0 rotate-180 h-auto" />
      <h2 className="font-bold text-secondary mb-16 z-10 text-3xl row-start-2 flex justify-center">
        Contact
      </h2>
      <div className="col-start-2 row-start-2 z-30 -ml-60 -mt-20">
        <Image src={tiktok} className="h-10 my-10" />
        <Image src={email} className="h-10 my-10" />
        <Image src={instagram} className="h-10 my-10" />
      </div>
      <div className="z-5 absolute right-48 top-36">
        <Blob />
      </div>
    </section>
  );
}
