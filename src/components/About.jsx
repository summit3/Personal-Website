import Grid from "./About/Grid";

export default function About() {
  return (
    <section
      className="scroll-smooth h-screen bg-secondary text-black text-3xl flex flex-col items-center"
      id="about"
    >
      <hr className="w-screen border-b-2 border-neutral-300 mb-3 mt-24"></hr>
      <h2 className="w-screen font-bold text-primary text-center mt-10 mb-16">
        About
      </h2>
      <Grid />
    </section>
  );
}
