import { useState } from "react";
import { Button } from "../ui/button";
import { 
  Fullscreen, 
  Volume2, 
  VolumeX, 
  Minus, 
  Plus, 
  Play, 
  Pause 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

interface ReadingControlsProps {
  onZenMode: () => void;
  onFontSizeChange: (size: number) => void;
  onTextToSpeechToggle: () => void;
  isTextToSpeechActive: boolean;
  fontSize: number;
  className?: string;
}

export const ReadingControls = ({
  onZenMode,
  onFontSizeChange,
  onTextToSpeechToggle,
  isTextToSpeechActive,
  fontSize,
  className
}: ReadingControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTextToSpeechToggle = () => {
    setIsPlaying(!isPlaying);
    onTextToSpeechToggle();
  };

  const handleFontSizeChange = (change: number) => {
    const newSize = fontSize + change;
    if (newSize >= 14 && newSize <= 24) {
      onFontSizeChange(newSize);
    }
  };

  return (
    <div className={cn("flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full p-1.5", className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={() => handleFontSizeChange(-1)}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease font size</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Decrease font size</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={() => handleFontSizeChange(1)}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase font size</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Increase font size</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={handleTextToSpeechToggle}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span className="sr-only">
                {isPlaying ? "Pause text to speech" : "Start text to speech"}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isPlaying ? "Pause reading" : "Start reading aloud"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={onTextToSpeechToggle}
            >
              {isTextToSpeechActive ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              <span className="sr-only">Toggle text to speech</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isTextToSpeechActive ? "Disable text to speech" : "Enable text to speech"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={onZenMode}
            >
              <Fullscreen className="h-4 w-4" />
              <span className="sr-only">Enter zen mode</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Enter zen mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};