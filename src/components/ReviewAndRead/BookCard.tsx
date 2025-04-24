import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Book = {
  id: number;
  title: string;
  image: string;
  rating: number;
  isPremium: boolean; // <-- fixed: primitive type instead of Boolean object
};

const BookCard: React.FC<{ book: Book }> = React.memo(({ book }) => {
  const [currentRating, setCurrentRating] = useState(book.rating);
  const navigate = useNavigate();

  const handleClick = () => {
    if (book.isPremium) {
      navigate("/reviewAndread/premium");
    } else {
      navigate(`/reviewAndread/BookRead/${book.id}`);
    }
  };
  

  return (
    <div className="w-80 rounded-xl shadow-xl border-none p-4 bg-white mt-20 h-90 hover:scale-[1.02] transition-transform ease-in-out duration-300">
      <img
        loading="lazy"
        src={book.image}
        alt={book.title}
        className="rounded h-40 w-full object-cover mb-4"
      />

      <h3 className="text-lg font-bold mb-2 text-gray-700 line-clamp-2">
        {book.title}
      </h3>

      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-6 h-6 cursor-pointer ${
              i <= currentRating ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => setCurrentRating(i)}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.959c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.959a1 1 0 00-.364-1.118L2.049 9.386c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.959z" />
          </svg>
        ))}
      </div>

      <form
        method="get"
        action={handleClick}
      >
        <Button
          className={`w-full rounded-lg cursor-pointer ${
            book.isPremium
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
        >
          {book.isPremium ? "Subscribe to read" : "Read Book"}
        </Button>
      </form>
    </div>
  );
});

export default BookCard;
