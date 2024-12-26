type CodeCornerLogoProps = {
  size?:number;
};
export default function CodeCornerLogo({size=10}: CodeCornerLogoProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      <img
        src="/code_corner_logo.svg"
        alt="Code Corner Logo"
        className= {size == 20? "h-20 w-20" : "h-10 w-10"}
      />
      <h6 className="text-slate-800 ml-2 text-lg">Code Corner</h6>
    </div>
  );
}
