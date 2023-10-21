import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className, ...ButtonProps }: ButtonProps) {
  return (
    <button
      {...ButtonProps}
      className={`bg-blue-500 px-4 py-2 rounded-md text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
