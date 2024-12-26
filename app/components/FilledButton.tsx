type FilledButtonProps = {
  title: string;
  // onChange: (event: ChangeEvent) => void;
};
export default function FilledButton({ title,  }: FilledButtonProps) {
  return (
    <button className="bg-slate-800 rounded-lg px-10 py-2 text-white font-medium">
      {title}
    </button>
  );
}
