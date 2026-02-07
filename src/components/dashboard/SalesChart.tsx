import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { SalesTrend } from "@/data/mockData";

interface SalesChartProps {
  data: SalesTrend[];
}

const SalesChart = ({ data }: SalesChartProps) => {
  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Sales Trend</h2>
        <p className="text-sm text-muted-foreground">Last 7 days performance</p>
      </div>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(152, 60%, 40%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(152, 60%, 40%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 55%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(160, 55%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(145, 20%, 88%)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(150, 10%, 45%)", fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(150, 10%, 45%)", fontSize: 12 }}
              tickFormatter={(value) => `$${value >= 1000 ? `${(value/1000).toFixed(1)}k` : value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(145, 20%, 88%)",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(150, 25%, 10%)", fontWeight: 600 }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(152, 60%, 40%)" 
              strokeWidth={2}
              fill="url(#salesGradient)"
              name="Revenue"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">Revenue</span>
        </div>
        <div className="text-muted-foreground">
          Total: <span className="font-semibold text-foreground">$28,450</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
