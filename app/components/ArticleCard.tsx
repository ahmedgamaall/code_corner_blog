export default function ArticleCard() {
  return (
    <div className="mt-10 flex flex-row space-x-0 space-y-5 md:space-x-5 md:space-y-0">
      <div className="bg-slate-100 md:w-1/3 hover:bg-slate-200 flex flex-col p-6 rounded-lg space-y-2 border border-slate-200 items-center drop-shadow-sm shadow-md shadow-slate-400">
        <img
          src="pair_programming.svg"
          alt="Code Corner Banner"
          className="w-200 rounded-s"
        />
        <h5
          className="font-bold text-lg text-slate-900"
          style={{ color: "#172B4D" }}
        >
          Ahmed Gamal
        </h5>
        <p className="leading-5 text-sm text-slate-700">
          It looks like you're encountering a hydration mismatch error in your
          React application. This can happen for several reasons, as you've
          listed. Here are some steps to help you troubleshoot and resolve the
          issue: 1. Server/Client Branch: - Ensure that any code that relies on
          window or other client-specific objects is only executed on the client
          side. For example: ```javascript if (typeof window !== 'undefined')
        </p>
      </div>{" "}
    </div>
  );
}
