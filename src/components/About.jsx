import spacer from "../../public/Svg/layered-waves-haikei.svg"
import Image from "next/image"

export default function About() {
  return <section className="h-screen bg-secondary">
    <Image className="spacer" src={spacer}></Image>
    <h1>About</h1>
    <Image className="spacer rotate-180" src={spacer}></Image>
  </section>
}