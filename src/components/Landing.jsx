import Blob from "./Blob";
import Title from "./Title";

export default function Landing() {
  return (
    <section className="h-screen grid grid-cols-5 grid-rows-3 bg-secondary mt-20">
      <Title />
      <Blob />
    </section>
  );
}
