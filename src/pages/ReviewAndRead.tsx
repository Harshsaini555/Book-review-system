import React, { useState } from "react";
import Sidebar from "@/components/ReviewAndRead/Sidebar";
import BookGrid from "@/components/ReviewAndRead/BookGrid";
import ReviewNav from "@/components/ReviewAndRead/ReviewNav";
import Stripe from "@/components/ReviewAndRead/Stripe";

const ReviewPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fiction");

  return (
    <div className="bg-white w-full">
        <ReviewNav />
        <Stripe />
        <div className="flex min-h-screen">
            <Sidebar onCategorySelect={setSelectedCategory} />
            <BookGrid category={selectedCategory} />
        </div>
    </div>
  );
};

export default ReviewPage;
