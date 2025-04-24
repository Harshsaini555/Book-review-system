import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { ScrollArea } from "../ui/scroll-area";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

export const BookReader = () => {
  const [fontSize, setFontSize] = useState(18);
  const [books, setBooks] = useState<{ title: string } | null>(null);
  const [isZenMode, setIsZenMode] = useState(false);
  const [isTtsActive, setIsTtsActive] = useState(false);
  const [readingProgress, setReadingProgress] = useState(20);
  const [selectedGenre, setSelectedGenre] = useState<'classic' | 'horror' | 'romance' | 'scifi'>('classic');
  const contentRef = useRef<HTMLDivElement>(null);

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

  const [bookDescription, setBookDescription] = useState<string>("");

  useEffect(() => {
    const fetchDescription = async () => {
      if (!books || !books.title) return;
  
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(books.title)}`); 
        if (!res.ok) {
          console.error(`API error: ${res.status}`);
          setBookDescription("Description not available.");
          return;
        }
  
        const data = await res.json();
  
        if (data.items && data.items.length > 0) {
          const description = data.items[0].volumeInfo.description || "No description available.";
          setBookDescription(description);
        } else {
          setBookDescription("No description available.");
        }
      } catch (error) {
        console.error("Fetch failed:", error);
        setBookDescription("Description not available.");
      }
    };
  
    fetchDescription();
  }, [books]);
  

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const newProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setReadingProgress(newProgress);
    }
  };

  const getThemeStyles = () => {
    switch (selectedGenre) {
      case 'horror':
        return "bg-gradient-to-br from-black to-red-950 border-red-900 shadow-[0_0_15px_rgba(220,38,38,0.2)]";
      case 'romance':
        return "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-[0_0_15px_rgba(236,72,153,0.1)]";
      case 'scifi':
        return "bg-gradient-to-br from-blue-950 to-purple-900 border-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.3)]";
      default:
        return "bg-card/50 backdrop-blur-sm border-border";
    }
  };

  const getTextStyles = () => {
    switch (selectedGenre) {
      case 'horror':
        return "text-red-50";
      case 'romance':
        return "text-pink-950";
      case 'scifi':
        return "text-blue-50";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className={cn(
      "relative transition-all w-225 duration-300",
      isZenMode ? "fixed inset-0 z-50 bg-background flex flex-col" : "rounded-lg"
    )}>
      {!isZenMode && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedGenre('classic')}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                selectedGenre === 'classic' ? "bg-primary text-primary-foreground" : "bg-card/60 backdrop-blur-sm"
              )}
            >
              Classic
            </button>
            <button
              onClick={() => setSelectedGenre('horror')}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                selectedGenre === 'horror' ? "bg-red-600 text-white" : "bg-card/60 backdrop-blur-sm"
              )}
            >
              Horror
            </button>
            <button
              onClick={() => setSelectedGenre('romance')}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                selectedGenre === 'romance' ? "bg-pink-400 text-white" : "bg-card/60 backdrop-blur-sm"
              )}
            >
              Romance
            </button>
            <button
              onClick={() => setSelectedGenre('scifi')}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                selectedGenre === 'scifi' ? "bg-blue-600 text-white" : "bg-card/60 backdrop-blur-sm"
              )}
            >
              Sci-Fi
            </button>
          </div>
          
         
        </div>
      )}
      
      <ScrollArea 
        className={cn(
          "rounded-lg border transition-all duration-300", 
          getThemeStyles(),
          isZenMode ? "h-[calc(100vh-8px)]" : "h-[600px]",
          isZenMode && "border-none"
        )}
        onScrollCapture={handleScroll}
        ref={contentRef}
      >
        <div className={cn(
          "prose prose-lg max-w-3xl mx-auto p-8",
          getTextStyles(),
          isZenMode && "p-16 mx-auto max-w-4xl"
        )}>
          <h1 className="font-serif mb-8 text-3xl">
            {books ? books.title : "Loading..."}
          </h1>
          <p className="leading-relaxed mb-6">{bookDescription}</p>
          <p className={"leading-relaxed mb-6"}>
            The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters .
          </p>
          <p className={`leading-relaxed mb-6 text-[${fontSize}px]`}>
            One frightfully hot morning, when she was about nine years old, she awakened feeling very cross, and she became crosser still when she saw that the servant who stood by her bedside was not her Ayah.
          </p>
          <p className={`leading-relaxed mb-6 text-[${fontSize}px]`}>
            "Why did you come?" she said to the strange woman. "I will not let you stay. Send my Ayah to me."
          </p>
          <p className={`leading-relaxed mb-6 text-[${fontSize}px]`}>
            The woman looked frightened, but she only stammered that the Ayah could not come and when Mary threw herself into a passion and beat and kicked her, she looked only more frightened and repeated that it was not possible for the Ayah to come to Missie Sahib.
          </p>
        </div>
      </ScrollArea>
      
      {isZenMode && (
        <>
          <div className="fixed bottom-0 left-0 right-0 p-2 z-50">
            <Progress value={readingProgress} className="h-1 w-full bg-primary/20" />
          </div>
          
        </>
      )}
      
      {isTtsActive && !isZenMode && (
        <div className="mt-4 p-3 bg-card/80 backdrop-blur-sm rounded-lg flex items-center gap-3">
          <div className="flex items-end h-6 gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-primary rounded-full animate-pulse" 
                style={{ 
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`
                }} 
              />
            ))}
          </div>
          <span className="text-sm font-medium">Reading aloud...</span>
        </div>
      )}
    </div>
  );
};
