import Link from "next/link";
interface SignUpLinkButtonProps {
  label?: string;
}
const SignUpLinkButton = (props: SignUpLinkButtonProps) => {
  return (
    <Link href="/register">
      <button className="text-white bg-rose-500 px-5 py-2 rounded-lg shadow-lg shadow-rose-200 text-sm font-semibold">
        {props.label || "Sign Up"}
      </button>
    </Link>
  );
};

export default SignUpLinkButton;
