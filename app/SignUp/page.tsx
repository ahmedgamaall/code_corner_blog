import CodeCornerLogo from "../components/CodeCornerLogo";
import LabelButton from "../components/LabelButton";
import TextButton from "../components/TextButton";
import SignupForm from "./components/SignupForm";

export default function SignUp() {
  return (
    <div className="md:px-72  items-center justify-center">
      <div className="bg-slate-200  flex flex-col space-y-1 items-center justify-items-center min-h-screen px-40 py-2 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-row justify-center space-x-3 items-center">
          <div className="font-bold text-2xl text-slate-800">Join to</div>
          <CodeCornerLogo size={20} />
        </div>
        <SignupForm />
        <LabelButton buttonTitle="Sign in" label="Already have an account?" href="/signin"/>
      </div>
    </div>
  );
}
