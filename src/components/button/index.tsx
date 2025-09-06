import { cn } from "../../helpers";

type TButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  className,
  ...props
}: TButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "text-white font-semibold bg-neutral-600 px-4 py-2 rounded flex items-center justify-center gap-1 transition-colors hover:cursor-pointer hover:bg-neutral-500",
        className
      )}
    >
      {children}
    </button>
  );
}
