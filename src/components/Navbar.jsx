import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo/SK Logo.png";
import Logo2 from "../../public/Logo/SK Logo - Bordered.png";

export default function Navbar() {
  return (
    <nav className="flex items-center p-2 border-b-2 w-full fixed top-0 bg-primary z-1 left-0 py-4">
      <Image
        src={Logo2}
        alt="SK Logo"
        width={70}
        height={70}
        quality={100}
        placeholder="blur"
      ></Image>
      <div className="space-x-20 ml-20">
        <Link href="/" className="font-bold">
          Home
        </Link>
        <Link href="/" className="font-bold">
          About
        </Link>
        <Link href="/" className="font-bold">
          Projects
        </Link>
        <Link href="/" className="font-bold">
          Contact
        </Link>
      </div>
    </nav>
  );
}
