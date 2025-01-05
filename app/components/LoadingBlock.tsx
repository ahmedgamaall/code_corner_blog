export default function LoadingBlock() {
  return (
    <div className="flex flex-row space-x-4">
      <div
        className="container flex mx-auto h-6 w-6 items-center delay-1000 duration-1000 ease-in-out p-2 text-center justify-center animate-spin"
        style={{ background: "#068FBB" }}
      ></div>
      <div
        className="container flex mx-auto h-6 w-6 items-center delay-1000 duration-1000 ease-in-out p-2 text-center justify-center animate-spin"
        style={{ background: "#103851" }}
      ></div>
      <div
        className="container flex mx-auto h-6 w-6 items-center delay-1000 duration-1000 ease-in-out p-2 text-center justify-center animate-spin"
        style={{ background: "#068FBB" }}
      ></div>
    </div>
  );
}
