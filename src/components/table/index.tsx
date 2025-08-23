import { cn } from "../../helpers";

type TableProps = React.ComponentPropsWithoutRef<"table">;
type TableHeadProps = React.ComponentPropsWithoutRef<"thead">;
type TableBodyProps = React.ComponentPropsWithoutRef<"tbody">;
type TableRowProps = React.ComponentPropsWithoutRef<"tr">;
type TableHeaderProps = React.ComponentPropsWithoutRef<"th">;
type TableDataProps = React.ComponentPropsWithoutRef<"td">;

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        className={cn(
          "w-full text-sm text-left rtl:text-right text-gray-500",
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
      className={cn("text-xs text-gray-700 uppercase bg-gray-50", className)}
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
        "bg-white border-b border-gray-200 hover:bg-gray-50",
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
    <th className={cn("px-6 py-3", className)} {...props}>
      {children}
    </th>
  );
}

export function TableData({ children, className, ...props }: TableDataProps) {
  return (
    <td className={cn("px-6 py-4", className)} {...props}>
      {children}
    </td>
  );
}
