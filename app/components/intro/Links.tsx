import Link from "next/link"
import Image from "next/image"
import fb from "../../assets/fb.png";
import tiktok from "../../assets/tiktok.png";
import twit from "../../assets/twit.png";
import ig from "../../assets/ig.png";

type Props = {}

export default function Links({}: Props) {
  return (
    <div className="flex flex-row gap-16">
    <Link href="https://www.facebook.com">
      <Image className="mb-8 w-12" src={fb} alt="facebook" />
    </Link>
    <Link href="https://www.instagram.com">
      <Image className="mb-8 w-12" src={ig} alt="instagram" />
    </Link>
    <Link href="https://www.twitter.com">
      <Image className="mb-8 w-12" src={twit} alt="twitter" />
    </Link>
    <Link href="https://www.tiktok.com">
      <Image className="mb-8 w-12" src={tiktok} alt="tiktok" />
    </Link>
  </div>
  )
}