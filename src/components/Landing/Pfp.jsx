import Image from "next/image";
import pfp from "../../../public/Pfp/PFP-Cropped.png";

export default function Pfp() {
  return (
    <div className="rounded-full h-96 w-96 overflow-hidden absolute right-80 top-72">
      <Image src={pfp} objectFit="cover" className="" />
    </div>
  );
}
