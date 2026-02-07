import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Nexus about your inventory..."
          className="min-h-[52px] max-h-[200px] resize-none pr-4"
          rows={1}
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        disabled={!input.trim() || isLoading}
        className="gradient-primary h-[52px] px-6"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
      </Button>
    </form>
  );
};

export default ChatInput;
