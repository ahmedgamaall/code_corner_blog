import FilledButton from "@/app/components/FilledButton";

export default function LoginForm() {
  return (
    <form className="items-center justify-stretch flex flex-col gap-6 w-96">
      <div className="flex flex-col w-full space-y-1">
        <label
          itemID="Email"
          className="text-slate-800 text-sm font-medium"
          htmlFor="email"
        >
          "Email"
        </label>
        <input
          itemID="Email"
          type="text"
        //   onChange={(event) => console.log(event)}
          placeholder="Email"
          className="flex-1 rounded-md px-6 py-2 text-slate-800 border border-slate-800"
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <label itemID="Password" className="text-slate-800 text-sm font-medium">
          "Password"
        </label>
        <input
          itemID="Password"
          type="text"
        //   onChange={(event) => console.log(event)}
          placeholder="Password"
          className="flex-1 rounded-md px-6 py-2 text-slate-800 border border-slate-800"
        />
      </div>
      <div className="pt-5">
        <FilledButton title="Login"></FilledButton>
      </div>
    </form>
  );
}
