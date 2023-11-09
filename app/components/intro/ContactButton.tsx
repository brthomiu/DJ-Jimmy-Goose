import Link from "next/link";

type Props = {};

export default function ContactButton({}: Props) {
  return (
    <Link
      href="/#contact"
      className="
        z-40
        mr-2
        flex h-16
        w-48 flex-col justify-center
        rounded-xl 
        bg-green-400
        bg-opacity-90
        text-center
        text-lg
        font-bold
        text-slate-700
        transition-all duration-200
        hover:scale-105
        active:scale-90
        "
    >
      Contact
    </Link>
  );
}
