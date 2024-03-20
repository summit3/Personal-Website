import Image from "next/image";
import code from "../../../public/Icons/code-square.svg";
import excel from "../../../public/Icons/pngwing.com.png";
import python from "../../../public/Icons/python.png";

export default function Grid() {
  return (
    <div className="grid grid-cols-3 w-screen justify-items-center px-24">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-primary p-3 flex items-center justify-center rounded-lg h-24 w-24">
          <Image className="col-start-1 h-12 w-12 invert" src={code} />
        </div>
        <p className="px-16 py-7 text-center text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus
          nibh. Nulla at finibus elit. Cras varius dolor vitae magna
          ullamcorper, tempus pharetra ipsum ullamcorper. Maecenas convallis
          neque in urna venenatis luctus.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-primary p-3 flex items-center justify-center rounded-lg h-24 w-24">
          <Image className="col-start-2 h-12 w-12 invert" src={excel} />
        </div>
        <p className="px-16 py-7 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus
          nibh. Nulla at finibus elit. Cras varius dolor vitae magna
          ullamcorper, tempus pharetra ipsum ullamcorper. Maecenas convallis
          neque in urna venenatis luctus.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-primary p-3 flex items-center justify-center rounded-lg h-24 w-24">
          <Image className="col-start-3 h-12 w-12 invert" src={python} />
        </div>
        <p className="px-16 py-7 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus
          nibh. Nulla at finibus elit. Cras varius dolor vitae magna
          ullamcorper, tempus pharetra ipsum ullamcorper. Maecenas convallis
          neque in urna venenatis luctus.
        </p>
      </div>
    </div>
  );
}
