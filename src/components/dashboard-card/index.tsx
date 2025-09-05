import type { LucideIcon } from "lucide-react";

type TDashboardCardProps = {
  title: string;
  icon: LucideIcon;
  value: string | number;
};
export default function DashboardCard({
  title,
  icon: Icon,
  value,
}: TDashboardCardProps) {
  return (
    <article className="bg-white h-full px-6 py-5 border-2 border-neutral-200 rounded-2xl flex flex-col justify-between gap-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon size={24} />
      </div>
      <span className="text-3xl font-bold">{value}</span>
    </article>
  );
}
