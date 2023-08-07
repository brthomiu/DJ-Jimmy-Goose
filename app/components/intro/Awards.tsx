import Image from "next/image";
import badge from "../../assets/badge.png";

type Props = {};

export default function Awards({}: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <Image className="w-16 h-fit" src={badge} alt="Award icon" />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl z-20 mt-6 text-slate-700 italic">
            Gold Medal - Formal/Wedding
          </h1>
          <h2 className="font-bold text-xl z-20 text-slate-700 italic">
            Paris DJ Olympics 2022
          </h2>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <Image className="w-16 h-fit" src={badge} alt="Award icon" />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl z-20 mt-8 text-slate-700 italic">
            Rising Star DJ Award - 2019
          </h1>
          <h2 className="font-bold text-xl mb-8 z-20 text-slate-700 italic">
            Bridal Magazine
          </h2>
        </div>
      </div>
    </div>
  );
}
