import { cn } from "../../helpers";

type THeadingProps = React.ComponentPropsWithoutRef<"h2">;

export default function Subheading({
  children,
  className,
  ...props
}: THeadingProps) {
  return (
    <h2 className={cn("text-gray-700 text-lg font-bold", className)} {...props}>
      {children}
    </h2>
  );
}
