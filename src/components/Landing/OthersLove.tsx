import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CarouselDemo from "@/components/Landing/Carouse";

export default function OthersLove() {
  return (
    <div id='OL' className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-4xl rounded-3xl  border-none bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-3xl font-bold text-gray-900">
            What Others Love About <span className="text-amber-500">BookVibe</span>
          </CardTitle>
          <CardDescription className="mt-2 text-gray-600">
            A Community of Book Lovers
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-10">
          <div className="space-y-4 md:w-1/2 text-2xl">
            <p className="text-gray-700  md:text-lg relative top-5 right-10">
              Join thousands of readers who are sharing their literary journeys, discovering new books, connecting with like-minded people and over 1 million book reviews from real renders.
            </p>
          </div>

          <div className=" mb-10 ">
            <CarouselDemo />
          </div>
        </CardContent>
      </div>
    </div>
  );
}
