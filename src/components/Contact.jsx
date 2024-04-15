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
      className="h-screen w-screen bg-primary grid grid-cols-3 grid-rows-4 relative"
      id="contact"
    >
      <Image src={wave} className="w-screen absolute top-0 rotate-180 h-auto" />
      <h2 className="font-bold text-secondary z-10 text-5xl col-start-2 row-start-2 flex justify-center -mt-12">
        Contact
      </h2>
      <div className="relative z-10 col-start-2 row-start-1 mt-40 -ml-52 sm:-ml-40 md:-ml-40 lg:-ml-32 xl:-ml-10 2xl:-ml-6">
        <Blob />
        <div className="text-black grid grid-cols-1 grid-rows-3 gap-20 absolute top-52 left-44 sm:top-52">
          <div className="flex items-center justify-center z-30">
            <div className="col-start-1 row-start-1 shrink-0">
              <Image src={tiktok} className="h-10 w-10 mr-5" />
            </div>
            <div className="text-lg font-bold col-start-2 row-start-1">
              <Link
                target="_blank"
                href="https://www.tiktok.com/@summit614?_t=8krP44rayX3&_r=1"
              >
                summit614
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center z-30">
            <div className="col-start-1 row-start-2 shrink-0">
              <Image src={email} className="h-10 w-10 mr-5" />
            </div>
            <div className="text-lg font-bold col-start-2 row-start-2">
              <Link target="_blank" href="mailto:summitbusiness3@gmail.com">
                summitbusiness3@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center z-30">
            <div className="col-start-1 row-start-3 shrink-0">
              <Image src={instagram} className="h-10 w-10 mr-5" />
            </div>
            <div className="text-lg font-bold col-start-2 row-start-3">
              <Link
                target="_blank"
                href="https://www.instagram.com/summit071?igsh=c3A2NWMzZjM1N244&utm_source=qr"
              >
                summit071
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
