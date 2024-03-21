import Blob from "./Landing/Blob";
import Title from "./Landing/Title";
import Pfp from "./Landing/Pfp";

export default function Landing() {
  return (
    <section
      className="h-screen grid grid-cols-5 grid-rows-3 bg-secondary mt-20 relative"
      id="landing"
    >
      <Title />
      <Blob />
      <Pfp />
    </section>
  );
}
