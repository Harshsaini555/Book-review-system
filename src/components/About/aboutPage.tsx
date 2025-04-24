import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white mt-10">
      <section className="w-full min-h-screen  flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-amber-600 drop-shadow-lg">About BookVibe</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
        Welcome to our book review platform — where stories come to life! Our mission is to create a space for passionate readers to explore, share, and discuss their favorite books. Whether you're discovering new titles or sharing thoughts, we're here to connect book lovers worldwide.
          BookVibe is your ultimate companion for discovering, reviewing, and connecting over the books you love. Our
          mission is to empower readers with authentic reviews and thoughtful recommendations.
        </p>
      </div>
      <div>
        
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl">
        <Card className="rounded-3xl w-60 h-70 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border-none bg-amber-50">
          <CardHeader className="flex flex-col items-center">
            <Sparkles size={40} className="text-amber-500 mb-2" />
            <CardTitle className="text-xl font-semibold text-center text-gray-500">Our Vision</CardTitle>
            <CardDescription className="mt-2 text-center text-gray-600">
              To create the most trusted and inspiring space for book enthusiasts.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border-none bg-amber-50">
          <CardHeader className="flex flex-col items-center">
            <BookOpen size={40} className="text-amber-500 mb-2" />
            <CardTitle className="text-xl font-semibold text-center text-gray-500">Our Mission</CardTitle>
            <CardDescription className="mt-2 text-center text-gray-600">
              Helping readers find, review, and share books that shape their journey.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border-none bg-amber-50">
          <CardHeader className="flex flex-col items-center">
            <Users size={40} className="text-amber-500 mb-2" />
            <CardTitle className="text-xl font-semibold text-center text-gray-500">Our Community</CardTitle>
            <CardDescription className="mt-2 text-center text-gray-600">
              Join a global network of passionate readers and lifelong learners.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <form method="get" action={'/about/reviewAndread'}>
        <Button variant="outline" className="bg-amber-500 w-60 h-15 mt-20 rounded-2xl cursor-pointer border-none text-xl hover:scale-102">Explore Books</Button>
      </form>
    </section>
    </div>

  );
}
