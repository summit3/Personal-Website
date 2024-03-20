import Card from "./Projects/Card";

export default function Projects() {
  return (
    <section className="h-screen bg-secondary text-black text-3xl flex flex-col items-center">
      <hr className="w-screen border-b-2 border-neutral-300 mb-3"></hr>
      <h2 className="w-screen font-bold text-primary text-center my-10">
        Projects
      </h2>
      <div className="grid grid-cols-3 w-screen justify-items-center px-64 mt-10 mb-16">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
