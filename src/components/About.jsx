import Grid from "./About/Grid";

export default function About() {
  return (
    <section className="h-screen bg-secondary text-black text-3xl flex flex-col justify-center items-center">
      <h2 className="font-bold text-primary block">About</h2>
      <Grid />
    </section>
  );
}
