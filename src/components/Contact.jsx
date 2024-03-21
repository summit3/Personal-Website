import Image from "next/image";
import wave from "../../public/Svg/layered-waves-haikei-2.svg";
import email from "../../public/Svg/email.svg";
import tiktok from "../../public/Svg/tiktok.svg";
import instagram from "../../public/Svg/instagram.svg";
import Blob from "./Landing/Blob-white.jsx";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      className="h-screen w-screen bg-primary grid grid-cols-2 grid-rows-2 relative"
      id="contact"
    >
      <Image src={wave} className="w-screen absolute top-0 rotate-180 h-auto" />
      <h2 className="font-bold text-secondary mb-16 z-10 text-5xl row-start-2 flex justify-center mt-6">
        Contact
      </h2>
      <div className="col-start-2 row-start-2 z-30 -ml-60 -mt-28 text-black">
        <div className="flex items-center -ml-4">
          <Image src={tiktok} className="h-10 my-10" />
          <div className="mr-72 -ml-80 text-lg font-bold">
            <Link href={tiktok}>summit614</Link>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={email} className="h-10 my-10" />
          <div className="mr-72 -ml-80 text-lg font-bold">
            <Link href={tiktok}>summitbusiness3@gmail.com</Link>
          </div>
        </div>
        <div className="flex items-center -ml-4">
          <Image src={instagram} className="h-10 my-10" />
          <div className="mr-72 -ml-80 text-lg font-bold">
            <Link href={tiktok}>summit071</Link>
          </div>
        </div>
      </div>
      <div className="z-5 absolute right-40 top-24">
        <Blob />
      </div>
    </section>
  );
}
