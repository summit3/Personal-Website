import Image from "next/image";
import code from "../../public/Icons/code-square.svg";
import excel from "../../public/Icons/pngwing.com.png";
import python from "../../public/Icons/python.png";

export default function About() {
  return (
    <section
      className="scroll-smooth bg-secondary text-black text-3xl flex flex-col items-center"
      id="about"
    >
      <hr className="w-screen border-b-2 border-neutral-300 mb-3 mt-24"></hr>
      <h2 className="w-screen font-bold text-primary text-center mt-10 mb-16">
        About
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-screen justify-items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-primary p-3 flex items-center justify-center rounded-lg h-24 w-24">
            <Image
              className="col-start-1 h-12 w-12 invert"
              src={code}
              alt="html code"
            />
          </div>
          <div className="px-16 py-7 text-center text-md">
            Experienced in web development, utilizing frameworks such as React
            and Tailwind CSS to create responsive and visually appealing
            websites. Find my work on the projects page.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-primary p-3 flex items-center justify-center rounded-lg h-24 w-24">
            <Image
              className="col-start-2 h-12 w-12 invert"
              src={excel}
              alt="excel logo"
            />
          </div>
          <div className="px-16 py-7 text-center">
            Skilled in developing comprehensive and dynamic spreadsheets using
            both Excel and Google Sheets, enabling efficient data analysis,
            organization, and presentation.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-primary p-3 flex items-center justify-center rounded-lg h-24 w-24">
            <Image
              className="col-start-3 h-12 w-12 invert"
              src={python}
              alt="python logo"
            />
          </div>
          <div className="px-16 py-7 text-center">
            Fluent in Python for data analysis using libraries such as
            Scikit-Learn, Pandas, and Matplotlib to execute machine learning
            algorithms and perform complex data modeling and analysis.
          </div>
        </div>
      </div>
    </section>
  );
}
