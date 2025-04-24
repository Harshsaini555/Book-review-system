import { Button } from "../ui/button";
import { Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { toast } from "sonner";

interface DashboardButtonProps {
  className?: string;
}

export const DashboardButton = ({ className }: DashboardButtonProps) => {
  const [added, setAdded] = useState(false);

  
  const handleClick = () => {
    setAdded(!added);
    
    {added ? toast.error("Removed from dashboard", { description: "Book is removed from dashboard"})  : toast.success("Added to dashboard", { description: "Book is added to dashboard"})}
  };
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(
              "group  relative overflow-hidden transition-all duration-300 hover:shadow-lg",
              "rounded-full px-5 h-12 fixed bottom-6 right-6 z-10",
              "bg-gradient-to-br from-primary/90 to-primary backdrop-blur-sm",
              "border border-primary/20 shadow-lg",
              "hover:scale-105 active:scale-95",
              added ? "text-white" : "text-gray-800",
              added && "bg-green-600 border-green-500/20",
              className
            )}
            onClick={handleClick}
          >
            {added ? (
              < >
                <Check className="mr-2 h-4 w-4" />
                Added to Dashboard
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Add to Dashboard
              </>
            )}
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{added ? "Remove from dashboard" : "Add to dashboard"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
