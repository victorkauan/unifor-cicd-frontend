import { cn } from "../../helpers";

type THeadingProps = React.ComponentPropsWithoutRef<"h2">;

export default function Subheading({
  children,
  className,
  ...props
}: THeadingProps) {
  return (
    <h2
      className={cn("text-neutral-900 text-2xl font-bold", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
