import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProfessionalMetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  trend?: "up" | "down" | "stable";
  subtitle?: string;
  className?: string;
}

export function ProfessionalMetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  trend,
  subtitle,
  className
}: ProfessionalMetricCardProps) {
  return (
    <Card className={cn("metric-card hover:shadow-md transition-all duration-300 group", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </p>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground group-hover:scale-105 transition-transform">
                {value}
              </p>
              {subtitle && (
                <p className="text-sm text-muted-foreground font-medium">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        {change && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "text-sm font-semibold",
                  changeType === "positive" && "text-green-600 dark:text-green-400",
                  changeType === "negative" && "text-red-600 dark:text-red-400",
                  changeType === "neutral" && "text-muted-foreground"
                )}
              >
                {change}
              </span>
              {trend && (
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  trend === "up" && "bg-green-500",
                  trend === "down" && "bg-red-500",
                  trend === "stable" && "bg-gray-400"
                )} />
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}