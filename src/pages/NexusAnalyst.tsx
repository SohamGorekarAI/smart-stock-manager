import { useState, useRef, useEffect } from "react";
import { Bot, Sparkles, Database, TrendingUp, MessageSquare } from "lucide-react";
import ChatMessage, { Message } from "@/components/nexus/ChatMessage";
import ChatInput from "@/components/nexus/ChatInput";
import SuggestedQuestions from "@/components/nexus/SuggestedQuestions";

// Simulated AI responses for demo
const getAIResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes("price") && lowerQuestion.includes("10%")) {
    return `Based on my analysis of your sales data and market trends, here's my assessment of a 10% price increase on snacks:

📊 **Projected Impact:**
- Revenue could increase by ~6-8% initially
- Sales volume may decrease by 12-15% in the first month
- Customer retention risk: Moderate

💡 **Recommendation:**
Rather than a blanket 10% increase, consider:
1. Premium items (Ferrero Rocher, Häagen-Dazs): Can handle 15% increase
2. Essential items (Parle-G, basic chips): Keep increase under 5%
3. Mid-tier items: 8-10% is optimal

📈 **Best Time to Implement:**
Fridays show 23% higher tolerance for price changes. Consider phased rollout starting with premium categories.`;
  }
  
  if (lowerQuestion.includes("turnover") || lowerQuestion.includes("fast selling")) {
    return `Here are your products with the highest turnover rates:

🥇 **Top 5 Fast Movers:**
1. Coca-Cola - 8.2 cycles/month (Stock: 120 → replenished 8 times)
2. Parle-G Biscuits - 7.5 cycles/month
3. Whole Milk - 6.8 cycles/month
4. KitKat - 6.2 cycles/month
5. Lay's Classic Chips - 5.9 cycles/month

💡 **Insight:**
Your beverage and dairy categories have the healthiest turnover. Consider allocating more shelf space to these categories.

⚠️ **Watch Out:**
Ferrero Rocher has only 1.2 cycles/month - consider reducing order quantities to prevent spoilage.`;
  }
  
  if (lowerQuestion.includes("best selling") || lowerQuestion.includes("top selling")) {
    return `Here are your top 5 best selling items this month:

🏆 **Monthly Leaders:**
1. **Coca-Cola** - 892 units ($1,775 revenue)
2. **Parle-G Biscuits** - 756 units ($975 revenue)
3. **Lay's Classic** - 634 units ($1,896 revenue)
4. **Whole Milk** - 589 units ($2,350 revenue)
5. **Pepsi** - 523 units ($989 revenue)

📊 **Category Breakdown:**
- Beverages dominate with 45% of top sales
- Snacks contribute 32%
- Dairy products show consistent demand

💰 **Revenue Insight:**
While Coca-Cola leads in volume, Whole Milk generates the highest revenue per sale. Consider bundling strategies!`;
  }
  
  if (lowerQuestion.includes("revenue") && lowerQuestion.includes("next week")) {
    return `Based on historical patterns and current trends, here's my revenue forecast:

📈 **Next Week Prediction:**
| Day | Expected Revenue | Confidence |
|-----|-----------------|------------|
| Mon | $2,850 | 87% |
| Tue | $2,620 | 85% |
| Wed | $3,180 | 82% |
| Thu | $3,540 | 84% |
| Fri | $4,380 | 89% |
| Sat | $5,920 | 91% |
| Sun | $5,210 | 88% |

**Total Predicted: $27,700** (±8%)

🔮 **Factors Considered:**
- Weekend shopping surge (+45% typical)
- Weather forecast (clear - positive for foot traffic)
- No major holidays this week
- Current stock levels sufficient for predicted demand`;
  }
  
  return `Thank you for your question! I've analyzed your inventory data to provide insights.

Based on your current stock levels and sales patterns, here are my observations:

📊 **Current Status:**
- Total SKUs: 1,247 products
- Categories performing well: Beverages, Snacks
- Areas needing attention: 23 items below threshold

💡 **Actionable Insight:**
Your question touches on an important aspect of inventory management. To give you a more specific answer, I'm analyzing patterns across your sales history, seasonal trends, and market data.

Would you like me to dive deeper into any specific category or metric?`;
};

const NexusAnalyst = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(content),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl gradient-primary shadow-glow">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Nexus Analyst</h1>
            <p className="text-muted-foreground">AI-powered inventory insights & recommendations</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success text-sm">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Online
            </div>
          </div>
        </div>

        {/* Capabilities pills */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
            <Database className="h-3.5 w-3.5" />
            Full Inventory Access
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5" />
            Sales Analytics
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Predictive Insights
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        {messages.length === 0 ? (
          <div className="max-w-3xl mx-auto">
            {/* Welcome message */}
            <div className="text-center mb-10">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <MessageSquare className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">How can I help you today?</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Ask me anything about your inventory, sales trends, pricing strategies, or demand predictions.
              </p>
            </div>

            <SuggestedQuestions onSelect={handleSend} />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex gap-3 animate-fade-in">
                <div className="shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="chat-bubble-ai">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-sm text-muted-foreground">Analyzing your data...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t bg-card/50 backdrop-blur-sm p-6">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSend={handleSend} isLoading={isLoading} />
          <p className="text-xs text-center text-muted-foreground mt-3">
            Nexus analyzes your inventory data in real-time. Connect to Lovable Cloud for live AI responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NexusAnalyst;
