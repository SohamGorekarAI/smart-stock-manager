import { AlertTriangle, TrendingUp, Package, ArrowRight } from "lucide-react";
import { RestockSuggestion } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface RestockSuggestionsCardProps {
  suggestions: RestockSuggestion[];
}

const priorityStyles = {
  high: {
    bg: "bg-destructive/10",
    border: "border-destructive/30",
    badge: "bg-destructive text-destructive-foreground",
    icon: "text-destructive",
  },
  medium: {
    bg: "bg-warning/10",
    border: "border-warning/30",
    badge: "bg-warning text-warning-foreground",
    icon: "text-warning",
  },
  low: {
    bg: "bg-info/10",
    border: "border-info/30",
    badge: "bg-info text-info-foreground",
    icon: "text-info",
  },
};

const RestockSuggestionsCard = ({ suggestions }: RestockSuggestionsCardProps) => {
  return (
    <div className="bg-card rounded-xl border shadow-card overflow-hidden">
      <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">AI Restock Suggestions</h2>
              <p className="text-sm text-muted-foreground">Predicted demand for next 7-14 days</p>
            </div>
          </div>
          <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
            {suggestions.length} items need attention
          </span>
        </div>
      </div>

      <div className="divide-y">
        {suggestions.map((suggestion, index) => {
          const styles = priorityStyles[suggestion.priority];
          
          return (
            <div 
              key={suggestion.productId}
              className={`p-4 hover:bg-muted/50 transition-colors animate-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${styles.bg}`}>
                  <AlertTriangle className={`h-4 w-4 ${styles.icon}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground">{suggestion.productName}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles.badge}`}>
                      {suggestion.priority}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {suggestion.reason}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Package className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">Current:</span>
                      <span className={`font-semibold ${suggestion.currentStock <= 10 ? "text-destructive" : "text-foreground"}`}>
                        {suggestion.currentStock}
                      </span>
                    </div>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-muted-foreground">Suggested:</span>
                      <span className="font-semibold text-primary">+{suggestion.suggestedRestock}</span>
                    </div>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">Predicted demand:</span>
                      <span className="font-semibold">{suggestion.predictedDemand}</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="shrink-0">
                  Restock
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 bg-muted/30 border-t">
        <Button variant="ghost" className="w-full text-primary hover:text-primary">
          View All Predictions
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default RestockSuggestionsCard;
