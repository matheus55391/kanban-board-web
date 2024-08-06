import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface FormeErrorProps {
  message?: string;
}
export const FormError = ({ message }: FormeErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-100 p-3 rounded-md flex items-center grap-x-2 text-sm text-red-400 space-x-2 justify-start">
      <HiOutlineExclamationTriangle className="text-red-500" size={18} />
      <span>{message}</span>
    </div>
  );
};
