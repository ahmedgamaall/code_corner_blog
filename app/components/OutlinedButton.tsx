type OutlinedButtonProps = {
  title: string;
  padding?: string;
  // onChange: (event: ChangeEvent) => void;
};
export default function OutlinedButton({ title, padding}: OutlinedButtonProps) {
  return (
    <button
      className="bg-transparent border-2 rounded-lg px-10 py-2 font-medium"
      style={{ borderColor: "#172B4D" , color:"#172B4D" ,}}
    >
      {title}
    </button>
  );
}
