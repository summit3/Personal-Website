import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo/SK Logo.png"

export default function Navbar() {
  return (
    <nav className="flex items-center p-2 border-b-2 border-gray-200 w-full fixed top-0 bg-secondary z-10 left-0">
        <Image src={Logo}
         alt="SK Logo"
         width={70}
         quality={100}
         placeholder="blur"
         >
         </Image>
        <div className="space-x-20 ml-20">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </div>
    </nav>
  );
}
