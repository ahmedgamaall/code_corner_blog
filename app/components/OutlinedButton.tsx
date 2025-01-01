import Link from "next/link";

type OutlinedButtonProps = {
  title: string;
  padding?: string;
  href?: string;
  onClick?: () => void;
};
export default function OutlinedButton({
  title,
  padding,
  href,
  onClick,
}: OutlinedButtonProps) {
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}
      className="bg-transparent border-2 rounded-lg px-10 py-2 font-medium"
      style={{ borderColor: "#172B4D", color: "#172B4D" }}
    >
      {title}
    </Link>
  );
}
