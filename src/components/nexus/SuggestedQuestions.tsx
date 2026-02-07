import { Sparkles } from "lucide-react";

const suggestedQuestions = [
  "What's the impact if I increase snack prices by 10%?",
  "Which products have the highest turnover rate?",
  "What are the top 5 best selling items this month?",
  "Predict my revenue for next week",
  "Which categories need more attention?",
  "What products should I discontinue?",
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

const SuggestedQuestions = ({ onSelect }: SuggestedQuestionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm font-medium">Suggested questions</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelect(question)}
            className="text-left p-4 rounded-xl border bg-card hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 group"
          >
            <p className="text-sm text-foreground group-hover:text-primary transition-colors">
              {question}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
