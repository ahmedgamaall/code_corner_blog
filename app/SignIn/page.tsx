import CodeCornerLogo from "../components/CodeCornerLogo";
import LabelButton from "../components/LabelButton";
import SigninForm from "./components/SigninForm";

export default function SignIn() {
  return (
    <div className="md:px-72 items-center justify-center">
      <div className="bg-slate-200  flex flex-col space-y-1 items-center justify-items-center min-h-screen px-40 py-20 gap-6 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-row justify-center space-x-3 items-center">
          <div className="font-bold text-2xl text-slate-800">
            Welcome Back to
          </div>
          <CodeCornerLogo size={20} />
        </div>
        <SigninForm />
        <LabelButton
          buttonTitle="Create one"
          label="No account?"
          href="/signup"
        />
      </div>
    </div>
  );
}
