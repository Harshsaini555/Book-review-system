import { useState } from "react";
import { Button } from "../ui/button";
import { Heart, Flame, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Reaction {
  id: string;
  icon: React.ReactNode;
  count: number;
  active: boolean;
}

export const ReaderReactions = () => {
  const [reactions, setReactions] = useState<Reaction[]>([
    { id: 'heart', icon: <Heart className="h-4 w-4" />, count: 24, active: false },
    { id: 'fire', icon: <Flame className="h-4 w-4" />, count: 18, active: false },
    { id: 'insight', icon: <Check className="h-4 w-4" />, count: 12, active: false },
  ]);

  const handleReaction = (id: string) => {
    setReactions(prev => 
      prev.map(reaction => 
        reaction.id === id 
          ? { 
              ...reaction, 
              active: !reaction.active, 
              count: reaction.active ? reaction.count - 1 : reaction.count + 1 
            } 
          : reaction
      )
    );
  };

  return (
    <div className="flex items-center gap-2 my-6">
      {reactions.map(reaction => (
        <Button
          key={reaction.id}
          variant="outline"
          size="sm"
          className={cn(
            "flex items-center gap-1.5 transition-all",
            reaction.active && "bg-primary text-primary-foreground"
          )}
          onClick={() => handleReaction(reaction.id)}
        >
          {reaction.icon}
          <span className="text-xs font-medium">{reaction.count}</span>
        </Button>
      ))}
      
      <div className="ml-auto bg-card/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
        5 people reading now
      </div>
    </div>
  );
};