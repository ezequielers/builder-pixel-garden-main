import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface AdminStatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
    label: string;
  };
  icon: React.ReactNode;
  iconColor?: string;
}

export default function AdminStatsCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  iconColor = "bg-blue-100",
}: AdminStatsCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return val.toLocaleString("pt-BR");
    }
    return val;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">
              {formatValue(value)}
            </p>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
            )}
            {trend && (
              <p
                className={`text-sm flex items-center gap-1 mt-1 ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {Math.abs(trend.value)}% {trend.label}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full ${iconColor}`}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
