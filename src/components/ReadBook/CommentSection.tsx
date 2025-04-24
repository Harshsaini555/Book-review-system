import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  liked: boolean;
  replies: Reply[];
}

interface Reply {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  liked: boolean;
}

export const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Prakul",
      content: "This chapter was absolutely beautiful. The imagery was vivid!",
      timestamp: "2 hours ago",
      likes: 12,
      liked: false,
      replies: [
        {
          id: 101,
          author: "Kshitiz",
          content: "I agree. The author's descriptions made me feel like I was right there in the garden.",
          timestamp: "1 hour ago",
          likes: 3,
          liked: false,
        }
      ]
    },
    {
      id: 2,
      author: "Tushar",
      content: "I love how the characters are developing. Can't wait to read more!",
      timestamp: "5 hours ago",
      likes: 8,
      liked: false,
      replies: []
    },
  ]);
  
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newReply, setNewReply] = useState("");

  const addComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: comments.length + 1,
      author: "You",
      content: newComment,
      timestamp: "Just now",
      likes: 0,
      liked: false,
      replies: []
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };

  const addReply = (commentId: number) => {
    if (!newReply.trim()) return;
    
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              author: "You",
              content: newReply,
              timestamp: "Just now",
              likes: 0,
              liked: false
            }
          ]
        };
      }
      return comment;
    }));
    
    setNewReply("");
    setReplyingTo(null);
  };

  const toggleLikeComment = (commentId: number) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          liked: !comment.liked
        };
      }
      return comment;
    }));
  };

  const toggleLikeReply = (commentId: number, replyId: number) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: comment.replies.map(reply => {
            if (reply.id === replyId) {
              return {
                ...reply,
                likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                liked: !reply.liked
              };
            }
            return reply;
          })
        };
      }
      return comment;
    }));
  };

  return (
    <div className="w-full max-w-2xl  mx-auto space-y-4">
      <div className="space-y-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] border focus:ring-gray-200 bg-card/50 backdrop-blur-sm"
        />
        <Button onClick={addComment} className="ml-auto block">
          Comment
        </Button>
      </div>
      
      <ScrollArea className="h-[500px] rounded-lg border bg-card/50 backdrop-blur-sm p-4">
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-3">
              <div className="flex gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/${comment.author}`} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/90 text-left">{comment.content}</p>
                  
                  <div className="flex items-center gap-3 pt-1">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={cn(
                        "h-8 px-2 gap-1.5", 
                        comment.liked && "text-red-500 dark:text-red-400"
                      )}
                      onClick={() => toggleLikeComment(comment.id)}
                    >
                      <Heart className="h-4 w-4" fill={comment.liked ? "currentColor" : "none"} />
                      <span className="text-xs">{comment.likes}</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 px-2 gap-1.5"
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-xs">Reply</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {replyingTo === comment.id && (
                <div className="pl-12 space-y-2">
                  <Textarea
                    placeholder={`Reply to ${comment.author}...`}
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="min-h-[80px] bg-card/50 backdrop-blur-sm"
                  />
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                      Cancel
                    </Button>
                    <Button size="sm" onClick={() => addReply(comment.id)}>
                      Reply
                    </Button>
                  </div>
                </div>
              )}
              
              {comment.replies.length > 0 && (
                <div className="pl-12 space-y-3">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="flex gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/60 transition-colors">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://avatar.vercel.sh/${reply.author}`} />
                        <AvatarFallback>{reply.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{reply.author}</span>
                          <span className="text-xs text-muted-foreground">
                            {reply.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/90">{reply.content}</p>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={cn(
                            "h-7 px-2 gap-1.5", 
                            reply.liked && "text-red-500 dark:text-red-400"
                          )}
                          onClick={() => toggleLikeReply(comment.id, reply.id)}
                        >
                          <Heart className="h-3.5 w-3.5" fill={reply.liked ? "currentColor" : "none"} />
                          <span className="text-xs">{reply.likes}</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
