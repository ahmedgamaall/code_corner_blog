import Link from "next/link";

type TextButtonProps = {
  title: string;
  href: string;
  // onChange: (event: ChangeEvent) => void;
};
export default function TextButton({ title, href }: TextButtonProps) {
  return (
    <Link href={href}>
      <button className="font-bold text-xl text-slate-800 border-none hover:underline hover:text-orange-600">
        {title}
      </button>
    </Link>
  );
}