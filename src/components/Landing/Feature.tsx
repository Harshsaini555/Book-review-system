import { Card } from "@/components/ui/card";
import { FaBookOpen, FaStar, FaUsers, FaSearch, FaChartLine, FaBookmark } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaBookOpen className="text-3xl text-white" />,
      title: "Vast Book Collection",
      description: "Explore thousands of reviews from classics to modern gems curated by book lovers. with different different genres and categories to choose from .",
      image: "../../../assets/1.jpg"
    },
    {
      icon: <FaStar className="text-3xl text-yellow-500" />,
      title: "Community Ratings",
      description: "See real opinions and ratings by readers before you dive into your next book adventure . Here you can rate the book and give your opinion about it.",
      image: "../../../assets/2.jpg"
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Reader Community",
      bg: 'bg-blue-500',
      description: "Join discussions, share insights and connect with a global community of readers and book lovers . You can also follow other users and see their reviews.",
      image: "../../../assets/3.jpg"
    },
    {
      icon: <FaSearch className="text-3xl text-white" />,
      title: "Smart Book Finder",
      description: "Advanced search to help you easily discover new books by genre, author or mood . You can also search for books by their title or author name and get the reviews.",
      image: "../../../assets/4.jpg"
    },
    {
      icon: <FaChartLine className="text-3xl text-red-500" />,
      title: "Reading Trends",
      description: "Stay updated with the latest reading trends, top charts and new releases to keep your reading list fresh and exciting . You can also see the most popular books in your area.",
      image: "../../../assets/5.jpg"
    },
    {
      icon: <FaBookmark className="text-3xl text-gray-700" />,
      title: "Personal Bookshelf",
      description: "Save favorites, track progress, and build your own virtual library to keep your reading journey organized and enjoyable . You can also create your own lists and share them with others.",
      image: "../../../assets/6.jpg"
    },
  ];

  return (
    <section className="pt-16 pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Why BookVibe?</h2>
        <p className="text-black mb-6">We have designed this platform to give reviews to books and make others to choose a suitable book.<br></br> and here are some of the features that make us stand out.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-105 group-hover:scale-110 transition-transform"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <div className="relative z-10 p-6 text-white">
                <div  className="">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
                {/* <div className="mt-4">
                  <button className="bg-white text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-zinc-200 transition">
                    Learn More
                  </button>
                </div> */}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
