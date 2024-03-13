import Grid from "./About/Grid";

export default function About() {
  return (
    <section className="h-screen bg-secondary text-black text-3xl flex flex-col items-center">
      <hr className="w-screen border-b-2 border-neutral-300 mb-3"></hr>
      <h2 className="w-screen font-bold text-primary text-center my-10">
        About
      </h2>
      <Grid />
    </section>
  );
}
