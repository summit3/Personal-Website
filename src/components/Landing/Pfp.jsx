import Image from "next/image";
import pfp from "../../../public/Pfp/PFP-Cropped.png";

export default function Pfp() {
  return (
    <div className="rounded-full h-96 w-96 overflow-hidden absolute right-80 top-52">
      <Image src={pfp} objectFit="cover" alt="Profile Picture" />
    </div>
  );
}
