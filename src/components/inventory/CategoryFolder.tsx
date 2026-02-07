import { Folder, ChevronRight } from "lucide-react";
import { Category, Subcategory } from "@/data/mockData";

interface CategoryFolderProps {
  category?: Category;
  subcategory?: Subcategory;
  onClick: () => void;
}

const CategoryFolder = ({ category, subcategory, onClick }: CategoryFolderProps) => {
  const name = category?.name || subcategory?.name || "";
  const icon = category?.icon;
  const productCount = category?.productCount || subcategory?.productCount || 0;
  const hasSubcategories = category?.subcategories && category.subcategories.length > 0;

  return (
    <button
      onClick={onClick}
      className="folder-card group w-full text-left hover:border-primary/30 border border-transparent"
    >
      <div className="flex items-center gap-4 w-full">
        <div className="relative">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {icon ? (
              <span className="text-2xl">{icon}</span>
            ) : (
              <Folder className="h-6 w-6 text-primary" />
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground truncate">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {productCount} {productCount === 1 ? "item" : "items"}
          </p>
        </div>
        
        {hasSubcategories && (
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
    </button>
  );
};

export default CategoryFolder;
