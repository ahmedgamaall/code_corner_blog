import Link from "next/link";

type LinkButtonProps = {
    href: string;
    text: string;
}


export default function LinkButton({href, text}: LinkButtonProps) {
  return (
    <Link href={href} className="text-white text-xs underline">
      {text}
    </Link>
  );
}
