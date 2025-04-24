import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Check } from "lucide-react";

export const ReadingGoals = () => {
  const [pagesRead] = useState(12);
  const [dailyGoal] = useState(20);
  const [streakDays] = useState(4);
  
  let progress = (pagesRead / dailyGoal) * 100;
  
  return (
    <Card className="bg-card/60 h-60 w-80 backdrop-blur-sm border-none shadow-xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium relative right-19">Reading Goals</CardTitle>
        <CardDescription className="relative right-8">Track your daily reading progress</CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>Today's progress</span>
            <span className="font-medium">{pagesRead} / {dailyGoal} pages</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex items-center gap-6 pt-2">
          <div className="text-center">
            <div className="text-2xl font-bold">{streakDays}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
          
          <div className="flex gap-1">
            {[...Array(7)].map((_, index) => (
              <div 
                key={index} 
                className={`w-5 h-5 rounded-full font-bold flex items-center justify-center text-xs ${
                  index < streakDays 
                    ? 'bg-black  text-white' 
                    : 'bg-muted'
                }`}
              >
                {index < streakDays && <Check className="h-3 w-3" />}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};