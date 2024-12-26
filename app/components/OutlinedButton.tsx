type OutlinedButtonProps = {
  title: string;
  padding?: string;
  // onChange: (event: ChangeEvent) => void;
};
export default function OutlinedButton({ title, padding}: OutlinedButtonProps) {
  return (
    <button className="bg-transparent border-2 border-slate-800 rounded-lg px-10 py-2 text-slate-800 font-medium">
      {title}
    </button>
  );
}
