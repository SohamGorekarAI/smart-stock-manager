import { useState, useMemo } from "react";
import { Search, Plus, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryFolder from "@/components/inventory/CategoryFolder";
import ProductCard from "@/components/inventory/ProductCard";
import InventoryBreadcrumb from "@/components/inventory/InventoryBreadcrumb";
import { categories, products, Category, Subcategory, Product } from "@/data/mockData";

interface BreadcrumbItem {
  id: string;
  name: string;
}

const Inventory = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const currentLevel = breadcrumbs.length;
  
  // Determine current view based on breadcrumbs
  const currentCategory = useMemo(() => {
    if (breadcrumbs.length === 0) return null;
    return categories.find(c => c.id === breadcrumbs[0].id) || null;
  }, [breadcrumbs]);

  const currentSubcategory = useMemo(() => {
    if (breadcrumbs.length < 2 || !currentCategory) return null;
    return currentCategory.subcategories.find(s => s.id === breadcrumbs[1].id) || null;
  }, [breadcrumbs, currentCategory]);

  // Get items to display
  const displayItems = useMemo(() => {
    if (currentLevel === 0) {
      // Show categories
      return categories.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (currentLevel === 1 && currentCategory) {
      // Show subcategories
      return currentCategory.subcategories.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (currentLevel === 2 && currentSubcategory) {
      // Show products
      return products.filter(p => 
        p.subcategory === currentSubcategory.id &&
        (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    return [];
  }, [currentLevel, currentCategory, currentSubcategory, searchQuery]);

  const handleCategoryClick = (category: Category) => {
    setBreadcrumbs([{ id: category.id, name: category.name }]);
    setSearchQuery("");
  };

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    setBreadcrumbs(prev => [...prev, { id: subcategory.id, name: subcategory.name }]);
    setSearchQuery("");
  };

  const handleBreadcrumbNavigate = (index: number) => {
    if (index === -1) {
      setBreadcrumbs([]);
    } else {
      setBreadcrumbs(prev => prev.slice(0, index + 1));
    }
    setSearchQuery("");
  };

  const getTitle = () => {
    if (currentLevel === 0) return "Categories";
    if (currentLevel === 1) return currentCategory?.name || "Subcategories";
    if (currentLevel === 2) return currentSubcategory?.name || "Products";
    return "Inventory";
  };

  const getSubtitle = () => {
    if (currentLevel === 0) return `${categories.length} categories`;
    if (currentLevel === 1) return `${currentCategory?.subcategories.length || 0} subcategories`;
    if (currentLevel === 2) return `${displayItems.length} products`;
    return "";
  };

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      {breadcrumbs.length > 0 && (
        <InventoryBreadcrumb items={breadcrumbs} onNavigate={handleBreadcrumbNavigate} />
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{getTitle()}</h1>
          <p className="text-muted-foreground mt-1">{getSubtitle()}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>

          {/* View toggle */}
          <div className="flex items-center border rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Filter */}
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>

          {/* Add new */}
          <Button className="gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            {currentLevel === 2 ? "Add Product" : "Add Category"}
          </Button>
        </div>
      </div>

      {/* Content */}
      {displayItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="p-4 rounded-full bg-muted mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-1">No items found</h3>
          <p className="text-muted-foreground">Try adjusting your search query</p>
        </div>
      ) : currentLevel < 2 ? (
        // Categories or Subcategories grid
        <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"}`}>
          {displayItems.map((item, index) => (
            <div 
              key={(item as Category | Subcategory).id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {currentLevel === 0 ? (
                <CategoryFolder 
                  category={item as Category}
                  onClick={() => handleCategoryClick(item as Category)}
                />
              ) : (
                <CategoryFolder 
                  subcategory={item as Subcategory}
                  onClick={() => handleSubcategoryClick(item as Subcategory)}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        // Products grid
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
          {displayItems.map((item, index) => (
            <div 
              key={(item as Product).id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <ProductCard product={item as Product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
