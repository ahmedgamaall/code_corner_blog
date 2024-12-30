import TextButton from "./TextButton";

type LabelButtonProps = {
  buttonTitle: string;
  href: string;
  label: string;
};

export default function LabelButton({
  buttonTitle,
  href,
  label,
}: LabelButtonProps) {
  return (
    <div className="flex flex-row justify-center space-x-2 items-center">
      <div
        className="text-xl"
        style={{ backgroundColor: "#172B4D" }}
      >
        {label}
      </div>
      <TextButton title={buttonTitle} href={href} />
    </div>
  );
}
