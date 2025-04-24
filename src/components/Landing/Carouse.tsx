import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { CheckCircle, Users, BookOpen, Heart, Globe } from "lucide-react";
import { FC } from "react";

interface Feature {
  icon: FC<{ size?: number }>;
  title: string;
  description: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Meet and discuss with like-minded book lovers worldwide.",
    points: ["Real-time book discussions", "Connect with global readers"]
  },
  {
    icon: BookOpen,
    title: "Curated Recommendations",
    description: "Discover books perfectly matched to your taste and interests.",
    points: ["Personalized book lists", "Community-sourced suggestions"]
  },
  {
    icon: Heart,
    title: "Passionate Reviews",
    description: "Honest feedback and ratings from readers you can trust.",
    points: ["Authentic reader insights", "Rated by book enthusiasts"]
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Explore stories and authors from every corner of the world.",
    points: ["Diverse book selections", "Worldwide reader access"]
  }
];

export default function FeaturesCarousel(){
  return (
    <Carousel className="w-120 h-[10rem] rounded-3xl border-none bg-white">
      <CarouselContent>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <CarouselItem key={index}>
              <div className="w-120  rounded-3xl  border-none bg-gradient-to-br from-gray-50 to-amber-50">
                <Card className="text-center border-none">
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      <div className="text-amber-500">
                        <Icon size={40} />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{feature.title}</CardTitle>
                    <CardDescription className="mt-2 text-gray-600">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <p key={idx} className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="text-amber-500" size={20} /> {point}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="text-black border-none" />
      <CarouselNext className="text-black border-none" />
    </Carousel>
  );
}
