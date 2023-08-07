import Image from "next/image";
import jimmy from "../../assets/jimmy.png";
import Links from "./Links";
import Awards from "./Awards";

type Props = {};

export default function Portrait({}: Props) {
  return (
    <div className="relative mt-16 flex flex-col items-center gap-4 z-20 bg-pink-100 bg-opacity-80 w-full max-w-lg text-center rounded-s-3xl shadow-2xl">

      <div className="flex items-center justify-center z-20 mt-6">
        <Image
          className="h-auto max-w-lg max-h-[475px] object-top object-cover z-30 shadow-2xl"
          src={jimmy}
          alt="Portrait of Jimmy"
        />
      </div>
      <Awards />
      {/* <Links /> */}
    </div>
  );
}
