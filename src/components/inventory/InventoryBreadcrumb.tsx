import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  id: string;
  name: string;
}

interface InventoryBreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (index: number) => void;
}

const InventoryBreadcrumb = ({ items, onNavigate }: InventoryBreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-1 text-sm mb-6">
      <button
        onClick={() => onNavigate(-1)}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      >
        <Home className="h-4 w-4" />
        <span>Inventory</span>
      </button>
      
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <button
            onClick={() => onNavigate(index)}
            className={`px-2 py-1 rounded-md transition-colors ${
              index === items.length - 1
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {item.name}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default InventoryBreadcrumb;
