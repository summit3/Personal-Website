import Image from "next/image";

export default function Card(props) {
  return (
    <div className="bg-white grid grid-cols-1 w-96 rounded-md border-primary border-2 overflow-hidden card">
      <div className="h-48 relative border-b-2 border-primary" id={props.id}>
        <Image
          src={props.img}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="h-auto text-sm px-2 py-3 text-center text-primary flex ">
        {props.desc}
      </div>
    </div>
  );
}
