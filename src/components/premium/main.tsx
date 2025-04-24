import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-black mt-15">
        

      {/* Header Section */}
      <header className="bg-gradient-to-r from-amber-50 to-yellow-100 text-gray-700 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Unlock Premium Book Reviews & Reading Features</h1>
        <p className="text-lg mb-4">Get access to exclusive reviews, recommendations, and premium books when you subscribe.</p>
        <Button className="mt-6 px-8 py-3 text-lg bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition">
          Start Your Journey
        </Button>
      </header>

      {/* Pricing Plans Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Subscription Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Plan 1: Free */}
          <Card className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
            <p className="text-lg text-gray-600 mb-4">Access limited books and reviews</p>
            <div className="text-3xl font-semibold mb-4">$0/month</div>
            <Separator className="mb-4" />
            <ul className="text-left mb-4 space-y-2 text-black">
              <li>Read a limited number of books</li>
              <li>Submit reviews and ratings, but cannot read other's review</li>
              <li>Limited access to book recommendations</li>
              <li>Add-free for 1 week</li>
              <li>Download 3 free e-books</li>
            </ul>
            <Button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-400 relative top-2">
              Start Free
            </Button>
          </Card>

          {/* Plan 2: Premium */}
          <Card className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-lg text-gray-600 mb-4">Get unlimited access to premium content and exclusive book reviews</p>
            <div className="text-3xl font-semibold mb-4">$9.99/month</div>
            <Separator className="mb-4" />
            <ul className="text-left mb-4 space-y-2 text-black">
              <li>Access to all books and reviews</li>
              <li>Exclusive book recommendations tailored to your taste</li>
              <li>Ability to submit unlimited book reviews</li>
              <li>Read books offline</li>
              <li>Ad-free experience</li>
            </ul>
            <Button className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-400">
              Subscribe Now
            </Button>
          </Card>

          {/* Plan 3: Enterprise */}
          <Card className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
            <p className="text-lg text-gray-600 mb-4">For teams, clubs, and organizations to read and review books together</p>
            <div className="text-3xl font-semibold mb-4">$29.99/month</div>
            <Separator className="mb-4" />
            <ul className="text-left mb-4 space-y-2 text-black">
              <li>Everything in Premium Plan</li>
              <li>Multiple account access for your team</li>
              <li>Group book reading and review challenges</li>
              <li>Collaborative book recommendations</li>
              <li>Dedicated support</li>
            </ul>
            <Button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-400">
              Get Enterprise Access
            </Button>
          </Card>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Subscription Plans?</h2>
        <div className="grid md:grid-cols-3 gap-12">

          {/* Feature 1 */}
          <Card className="p-6 bg-amber-50 border-none rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Access to All Reviews</h3>
            <p>With the Premium plan, read in-depth reviews from other readers and leave your own ratings for books!</p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-6 bg-amber-50 border-none rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Endless Collection of Books</h3>
            <p>Unlock the complete library of books from all genres, including exclusive premium titles not available elsewhere.</p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-6 bg-amber-50 border-none rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Exclusive Book Recommendations</h3>
            <p>Get personalized book recommendations based on your reading history and preferences.</p>
          </Card>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Subscribers Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-8">

          {/* Testimonial 1 */}
          <Card className="max-w-md bg-amber-100 border-none p-6 rounded-xl shadow-lg">
            <p className="text-lg mb-4">“I love the Premium plan! I get access to so many great books and can read reviews before I start reading.”</p>
            <span className="font-semibold">Nikhil</span>
          </Card>

          {/* Testimonial 2 */}
          <Card className="max-w-md bg-amber-100 border-none p-6 rounded-xl shadow-lg">
            <p className="text-lg mb-4">“The book recommendations are spot-on! I’ve discovered so many amazing reads that I never would have found otherwise.”</p>
            <span className="font-semibold">Abhishek</span>
          </Card>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Book Review System — All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default Main;
