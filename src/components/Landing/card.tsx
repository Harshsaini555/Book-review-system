import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Props {
  name: string;
  quote: string;
  image: string;
  role: string;
}

export default function TestimonialCard({name,quote,image,role}: Props) {
  return (
    <div className="bg-white p-4 ml-5">
      <Card className="w-[20rem] h-[19rem] rounded-xl pt-0 shadow-lg border-none bg-amber-50">
        <CardHeader className="flex flex-row items-center text-center">
          <Avatar className="w-20 h-20 mb-4 z-30 mt-[1rem]">
            <AvatarImage src={image} alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-4">
          <CardTitle className="text-[1rem] text-black font-semibold text-left">{name}</CardTitle>
          <CardDescription className="text-sm text-gray-500 mt-2 text-left">{role}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="relative bottom-3">
          <p className="text-gray-700 text-base mb-4">
            {quote}
          </p>

          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
