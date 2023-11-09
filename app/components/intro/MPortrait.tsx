import Image from "next/image";
import jimmy from "../../assets/jimmy.png";
import Links from "./Links";
import Awards from "./Awards";

type Props = {};

export default function MPortrait({}: Props) {
  return (
    <div
      className="
        relative
        z-40 mt-4
        flex w-full 
        max-w-lg flex-col 
        items-center
        bg-pink-100 bg-opacity-80 
        text-center shadow-2xl 
        "
    >
      <h1
        className="
          p-4 
          text-xl 
          text-slate-700
          "
      ></h1>
      <div
        className="
          z-50 
          flex 
          items-center 
          justify-center
          "
      >
        <Image
          className="
            w-fill z-40
            mb-6
            h-auto
            object-cover object-top 
            ps-0 
            shadow-2xl
            "
          src={jimmy}
          alt="Portrait of Jimmy"
        />
        
      </div>
      <div className="mb-2">
        <Awards />
      </div>
      <Links />
    </div>
  );
}
