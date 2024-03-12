import Blob from "./Blob";
import Title from "./Title";

export default function Landing() {
  return (
    <section className="h-screen grid grid-cols-3 grid-rows-3">
      <Title />
      <Blob />
    </section>
  );
}
