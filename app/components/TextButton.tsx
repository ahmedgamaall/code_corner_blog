type TextButtonProps = {
  title: string;
  // onChange: (event: ChangeEvent) => void;
};
export default function TextButton({ title }: TextButtonProps) {
  return (
    <button className="font-bold text-xl text-slate-800 border-none hover:underline hover:text-orange-600">
      {title}
    </button>
  );
}
