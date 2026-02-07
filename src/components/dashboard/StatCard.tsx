import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "warning" | "success";
}

const StatCard = ({ title, value, subtitle, icon: Icon, trend, variant = "default" }: StatCardProps) => {
  const variantStyles = {
    default: "bg-card",
    primary: "gradient-primary text-white",
    warning: "bg-warning/10 border-warning/20",
    success: "bg-success/10 border-success/20",
  };

  const iconBgStyles = {
    default: "bg-primary/10 text-primary",
    primary: "bg-white/20 text-white",
    warning: "bg-warning/20 text-warning",
    success: "bg-success/20 text-success",
  };

  return (
    <div className={`stat-card border ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconBgStyles[variant]}`}>
          <Icon className="h-5 w-5" />
        </div>
        {trend && (
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
            trend.isPositive 
              ? "bg-success/10 text-success" 
              : "bg-destructive/10 text-destructive"
          }`}>
            {trend.isPositive ? "+" : ""}{trend.value}%
          </span>
        )}
      </div>
      <div>
        <h3 className={`text-3xl font-bold ${variant === "primary" ? "text-white" : "text-foreground"}`}>
          {value}
        </h3>
        <p className={`text-sm font-medium mt-1 ${variant === "primary" ? "text-white/90" : "text-foreground"}`}>
          {title}
        </p>
        {subtitle && (
          <p className={`text-xs mt-1 ${variant === "primary" ? "text-white/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
