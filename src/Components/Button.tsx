import { ReactNode } from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  type: "button" | "submit";
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
  className:string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  loading,
  className
}) => {
  return <button className={className} type={type} onClick={onClick}>{loading ? <ClipLoader /> : <>{children}</>}</button>;
};

export default Button;
