import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

type Book = {
  id: number;
  title: string;
  image: string;
  rating: number;
  isPremium: boolean;
};

const BookGrid: React.FC<{ category: string }> = ({ category }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);

    fetch(`http://localhost/Backend/Books.php?category=${category}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setBooks(data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error(err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      });

    return () => { isMounted = false }; // Avoid setting state on unmounted component
  }, [category]);

  if (loading) return <p className="relative top-80 left-200 text-black">Loading books...</p>;
  if (error) return <p className="ml-64 mt-8 text-red-500">Failed to load books. Please try again!</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ml-75 mt-8">
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default React.memo(BookGrid);
