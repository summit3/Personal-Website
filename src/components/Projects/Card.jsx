export default function Card() {
  return (
    <div className="bg-white grid grid-cols-1 w-96 rounded-md border border-black border-1 overflow-hidden">
      <div className="bg-primary h-64"></div>
      <div className="h-auto text-sm px-2 py-3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus
        nibh. Nulla at finibus elit. Cras varius dolor vitae magna ullamcorper,
        tempus pharetra ipsum ullamcorper. Maecenas convallis neque in urna
        venenatis luctus.
      </div>
    </div>
  );
}
