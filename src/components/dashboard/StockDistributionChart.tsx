import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { StockDistribution } from "@/data/mockData";

interface StockDistributionChartProps {
  data: StockDistribution[];
}

const StockDistributionChart = ({ data }: StockDistributionChartProps) => {
  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Stock Distribution</h2>
        <p className="text-sm text-muted-foreground">By category percentage</p>
      </div>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              nameKey="category"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(145, 20%, 88%)",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value: number) => [`${value}%`, "Stock"]}
            />
            <Legend 
              layout="vertical" 
              align="right" 
              verticalAlign="middle"
              formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockDistributionChart;
