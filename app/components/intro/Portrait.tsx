import Image from "next/image";
import jimmy from "../../assets/jimmy.png";
import Links from "./Links";

type Props = {};

export default function Portrait({}: Props) {
  return (
    <div
      className="
        relative
        z-50 mt-24
        flex w-full 
        max-w-lg flex-col 
        items-center
        rounded-s-3xl 
        bg-pink-100 bg-opacity-80 
        text-center shadow-2xl
        2xl:mt-40
        3xl:mt-72
        4xl:mt-96
        "
    >
      <h1
        className="
          p-4 
          text-2xl 
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
            z-50 h-auto
            max-h-[475px]
            max-w-lg
            object-cover
            object-top ps-0 
            shadow-2xl 
            2xl:max-w-lg
            "
          src={jimmy}
          alt="Portrait of Jimmy"
        />
      </div>

      <Links />
    </div>
  );
}
