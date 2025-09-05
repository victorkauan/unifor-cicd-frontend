import { cn } from "../../helpers";

type TableProps = React.ComponentPropsWithoutRef<"table">;
type TableHeadProps = React.ComponentPropsWithoutRef<"thead">;
type TableBodyProps = React.ComponentPropsWithoutRef<"tbody">;
type TableRowProps = React.ComponentPropsWithoutRef<"tr">;
type TableHeaderProps = React.ComponentPropsWithoutRef<"th">;
type TableDataProps = React.ComponentPropsWithoutRef<"td">;

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="border-2 border-neutral-200 rounded-lg relative overflow-x-auto">
      <table
        className={cn(
          "w-full text-sm text-left rtl:text-right text-neutral-900",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <thead
      className={cn(
        "text-xs text-neutral-900 border-b border-neutral-200 shadow uppercase",
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody className={cn(className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        "[&:not(:last-child)]border-b border-neutral-200 hover:bg-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHeader({
  children,
  className,
  ...props
}: TableHeaderProps) {
  return (
    <th className={cn("px-5 py-4", className)} {...props}>
      {children}
    </th>
  );
}

export function TableData({ children, className, ...props }: TableDataProps) {
  return (
    <td className={cn("p-5", className)} {...props}>
      {children}
    </td>
  );
}
