import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""} animate-fade-in`}>
      {/* Avatar */}
      <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
        isUser ? "gradient-primary" : "bg-muted"
      }`}>
        {isUser ? (
          <User className="h-4 w-4 text-white" />
        ) : (
          <Bot className="h-4 w-4 text-primary" />
        )}
      </div>

      {/* Message bubble */}
      <div className={`max-w-[75%] ${isUser ? "chat-bubble-user" : "chat-bubble-ai"}`}>
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm prose prose-sm prose-emerald max-w-none dark:prose-invert">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
        <p className={`text-xs mt-2 ${isUser ? "text-white/60" : "text-muted-foreground"}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
