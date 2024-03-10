import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
  className?: string;
  style?: Record<string, string>;
}

export function Button({
  children,
  onClick,
  active = false,
  className,
  style,
}: ButtonProps) {
  return (
    <button
      style={style}
      onMouseDown={(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
      }}
      onClick={onClick}
      className={cn(
        className,
        "mb-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-150 shadow-lg hover:shadow-xl",
        {
          "bg-link border-link text-white hover:bg-link focus:bg-link active:bg-link":
            active,
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
