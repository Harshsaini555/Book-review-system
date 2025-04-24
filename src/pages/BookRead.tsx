import { BookReader } from "@/components/ReadBook/BookReader";
import { CommentSection } from "@/components/ReadBook/CommentSection";
// import { DashboardButton } from "@/components/ReadBook/DashboardButton";
import { ThemeToggle } from "@/components/ReadBook/ThemeToggle";
import { ReadingGoals } from "@/components/ReadBook/ReadingGoals";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeProvider } from "@/provider/ThemeProvider";
import ReadBookNav from "@/components/ReadBook/ReadBookNav";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const BookRead = () => {
  const [books, setBooks] = useState<{ title: string } | null>(null);

  const { id } = useParams();
  console.log("Book ID:", id);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`http://localhost/Backend/call.php?id=${id}`);
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  },[id]);

  return (
    <ThemeProvider>
        <ReadBookNav />
    <div className="min-h-screen bg-background text-foreground transition-colors pt-10">
      <header className="fixed top-0 right-0 p-4 z-50">
        <ThemeToggle />
      </header>
      
      <main className="container  px-4 py-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="lg:col-span-3 ">
            <BookReader />
          </div>
          
          <div className="space-y-6">
            <ReadingGoals />
            
            <Card className="bg-card/60 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-3 text-left ml-3">About This Book</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="text-left">{books?.title || "Unknown Title"}</span> is a novel by Frances Hodgson Burnett first published in 1911.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-primary/10 text-xs px-2 py-1 rounded-full">Classic</span>
                  <span className="bg-primary/10 text-xs px-2 py-1 rounded-full">Children</span>
                  <span className="bg-primary/10 text-xs px-2 py-1 rounded-full">Fiction</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif mb-8 text-center">FeedBack and Discussions</h2>
          <CommentSection />
        </div>
      </main>
      
    </div>
    </ThemeProvider>
  );
};

export default BookRead;