import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  Bot, 
  TrendingUp,
  Boxes,
  Settings,
  LogOut
} from "lucide-react";

const navItems = [
  { 
    label: "Dashboard", 
    path: "/", 
    icon: LayoutDashboard,
    description: "Overview & Analytics"
  },
  { 
    label: "Inventory", 
    path: "/inventory", 
    icon: Package,
    description: "Manage Products"
  },
  { 
    label: "Nexus Analyst", 
    path: "/nexus", 
    icon: Bot,
    description: "AI Insights"
  },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-glow">
          <Boxes className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">GroceryIQ</h1>
          <p className="text-xs text-sidebar-foreground/60">Inventory System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== "/" && location.pathname.startsWith(item.path));
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`
                group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-glow" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }
              `}
            >
              <item.icon className={`h-5 w-5 transition-transform duration-200 ${isActive ? "" : "group-hover:scale-110"}`} />
              <div className="flex-1">
                <p className="font-medium text-sm">{item.label}</p>
                <p className={`text-xs ${isActive ? "text-sidebar-primary-foreground/70" : "text-sidebar-foreground/50"}`}>
                  {item.description}
                </p>
              </div>
              {isActive && (
                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Stats Summary */}
      <div className="px-4 py-4 mx-3 mb-3 rounded-xl bg-sidebar-accent/50 border border-sidebar-border">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="h-4 w-4 text-sidebar-primary" />
          <span className="text-xs font-medium text-sidebar-foreground">Quick Stats</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-sidebar-foreground/50">Products</p>
            <p className="font-semibold text-sidebar-foreground">1,247</p>
          </div>
          <div>
            <p className="text-sidebar-foreground/50">Low Stock</p>
            <p className="font-semibold text-warning">23</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-3">
        <button className="flex w-full items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors">
          <Settings className="h-4 w-4" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
