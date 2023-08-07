import Image from "next/image";
import background from "../../assets/background.jpeg";
import Portrait from "./Portrait";
import Info from "./Info";

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className=" z-10 mt-4">
      <div
        className="
        flex flex-col z-20
        items-center justify-center
        gap-8"
        tabIndex={0}
      >
        <div className="flex flex-row">
          <Portrait />
          <Info />
        </div>
      </div>

      <div
        className="
          absolute top-0 z-10
          w-full h-full 
        bg-gray-900 
          opacity-10"
      ></div>
      <Image
        className="
          absolute top-0 z-0
          h-full 
          object-cover 
          blur-sm"
        alt="Wedding venue"
        src={background}
      />
    </div>
  );
}
