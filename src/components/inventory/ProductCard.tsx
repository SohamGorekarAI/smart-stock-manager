import { Package, AlertTriangle, Pencil, Trash2, Plus, Minus } from "lucide-react";
import { Product } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  const isLowStock = product.stock <= product.lowStockThreshold;
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card border group">
      {/* Header with status badge */}
      <div className="p-4 border-b bg-muted/30">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>
          
          {isOutOfStock ? (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          ) : isLowStock ? (
            <Badge variant="outline" className="text-xs border-warning text-warning bg-warning/10">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Low Stock
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs border-success text-success bg-success/10">
              In Stock
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">per {product.unit}</p>
          </div>
          
          <div className="text-right">
            <p className={`text-lg font-semibold ${
              isOutOfStock ? "text-destructive" : 
              isLowStock ? "text-warning" : 
              "text-foreground"
            }`}>
              {product.stock}
            </p>
            <p className="text-xs text-muted-foreground">in stock</p>
          </div>
        </div>

        {/* Stock adjustment buttons */}
        <div className="flex items-center gap-2 mb-4">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Minus className="h-3 w-3" />
          </Button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium">{product.stock} units</span>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onEdit?.(product)}
          >
            <Pencil className="h-3 w-3 mr-1" />
            Edit
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => onDelete?.(product)}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
