import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <div className="h-0 2xl:h-12 3xl:h-48 4xl:h-96"></div>
      <div className="flex h-12 flex-row items-center justify-between bg-slate-900 p-4 text-slate-400">
        <div className="flex flex-row gap-4">
          <Link href="https://www.instagram.com/" target="_blank">Instagram</Link>
          <Link href="https://www.facebook.com/" target="_blank">Facebook</Link>
          <Link href="https://twitter.com/" target="_blank">Twitter</Link>
          <Link href="https://www.tiktok.com/" target="_blank">TikTok</Link>
        </div>
        <Link href="https://bradthompsonweb.dev/" target="_blank">
          Built by Brad Thompson - 2023
        </Link>
      </div>
    </div>
  );
}
