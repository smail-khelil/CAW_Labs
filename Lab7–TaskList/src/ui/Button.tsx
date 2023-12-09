interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  width?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-1/5" | "w-1/6" | "w-fit";
}

const Button = ({
  children,
  className,
  onClick,
  width = "w-full",
  ...rest
}: IProps) => {
  // console.log({ rest });
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${className} ${width}   font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded flex flex-row items-center space-x-2 justify-center m-1`}
    >
      {children}
    </button>
  );
};

export default Button;
``;
