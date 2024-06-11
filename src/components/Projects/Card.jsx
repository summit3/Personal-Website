import Image from "next/image";

export default function Card(props) {
  return (
    <div className="bg-white grid grid-cols-1 w-96 rounded-md border border-black border-1 overflow-hidden card">
      <div className="h-48 relative" id={props.id}>
        <Image
          src={props.img}
          alt="Finance Project Image"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="h-auto text-sm px-2 py-3 text-center">{props.desc}</div>
    </div>
  );
}
