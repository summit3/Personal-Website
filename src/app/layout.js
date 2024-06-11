import "./globals.css";
import Navbar from "@/components/Navbar";
import { roboto } from "../../public/Utils/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Summit&apos;s Portfolio</title>
      </head>
      <body className={`${roboto.className} text-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
