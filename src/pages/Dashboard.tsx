import { Package, AlertTriangle, Layers, DollarSign, TrendingUp, ShoppingCart, RotateCcw } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RestockSuggestionsCard from "@/components/dashboard/RestockSuggestionsCard";
import SalesChart from "@/components/dashboard/SalesChart";
import StockDistributionChart from "@/components/dashboard/StockDistributionChart";
import { dashboardStats, restockSuggestions, salesTrends, stockDistribution } from "@/data/mockData";

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your inventory overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Products"
          value={dashboardStats.totalProducts.toLocaleString()}
          subtitle="Across all categories"
          icon={Package}
          variant="primary"
        />
        <StatCard
          title="Low Stock Items"
          value={dashboardStats.lowStockItems}
          subtitle="Needs attention"
          icon={AlertTriangle}
          variant="warning"
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${dashboardStats.monthlyRevenue.toLocaleString()}`}
          subtitle="This month"
          icon={DollarSign}
          trend={{ value: dashboardStats.revenueGrowth, isPositive: true }}
        />
        <StatCard
          title="Stock Turnover"
          value={dashboardStats.stockTurnover}
          subtitle="Inventory cycles/month"
          icon={RotateCcw}
          variant="success"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SalesChart data={salesTrends} />
        </div>
        <div>
          <StockDistributionChart data={stockDistribution} />
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Categories"
          value={dashboardStats.totalCategories}
          subtitle="Product categories"
          icon={Layers}
        />
        <StatCard
          title="Top Category"
          value={dashboardStats.topSellingCategory}
          subtitle="Best performing"
          icon={TrendingUp}
        />
        <StatCard
          title="Avg Order Value"
          value={`$${dashboardStats.averageOrderValue}`}
          subtitle="Per transaction"
          icon={ShoppingCart}
        />
      </div>

      {/* AI Restock Suggestions */}
      <div className="animate-slide-up">
        <RestockSuggestionsCard suggestions={restockSuggestions} />
      </div>
    </div>
  );
};

export default Dashboard;
