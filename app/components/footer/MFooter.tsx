import Link from "next/link";

type Props = {};

export default function MFooter({}: Props) {
  return (
    <div>
      <div className="h-0 2xl:h-12 3xl:h-48 4xl:h-96"></div>
      <div className="flex h-12 flex-row items-center text-center justify-around bg-slate-900 p-4 text-slate-400">

        <Link href="https://bradthompsonweb.dev/" target="_blank">
          Built by Brad Thompson - 2023
        </Link>
      </div>
    </div>
  );
}
