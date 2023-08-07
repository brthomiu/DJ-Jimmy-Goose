import dj1 from "../../assets/dj1.png";
import party3 from "../../assets/party3.jpeg";
import Image from "next/image";

type Props = {};

export default function GridItem2({}: Props) {
  return (
    <div className="group h-full w-3/4 max-w-5xl flex flex-row justify-center" tabIndex={0}>
      <div className="bg-black bg-opacity-60 w-3/4 max-w-5xl absolute mt-72 max-xl:mt-52 text-center z-50 opacity-0 group-hover:opacity-100 group-hover:scale-125 group-focus:scale-125 group-focus:opacity-100 group-focus:blur-none transition-all duration-1000">
        <h1 className="text-4xl italic blur-none">
          &quot;The reception was a blast thanks to Jimmy.&quot;
        </h1>
        <h1 className="mt-2 text-2xl blur-none italic">- Michelle H.</h1>
      </div>
      <div className="bg-gray-900 opacity-60 blur-sm group-hover:scale-125 group-hover:opacity-100 group-hover:blur-none group-focus:scale-125 group-focus:opacity-100 group-focus:blur-none h-full flex flex-row transition-all duration-1000">
        <div className="w-3/5 group-hover:w-3/4 group-focus:w-3/4 transition-all duration-1000">
          <Image
            className="h-full max-h-96 object-cover"
            src={party3}
            alt="Wedding party"
          />
        </div>
        <div className="w-2/5 group-hover:w-1/4 group-focus:w-1/4 transition-all duration-1000">
          <Image
            className="h-full max-h-96 object-cover"
            src={dj1}
            alt="Wedding DJ"
          />
        </div>
      </div>
    </div>
  );
}