import Blob from "./Blob";
import Title from "./Title";
import Pfp from "./Pfp";

export default function Landing() {
  return (
    <section className="h-screen grid grid-cols-5 grid-rows-3 bg-secondary mt-20">
      <Title />
      <Blob />
      <Pfp />
    </section>
  );
}
