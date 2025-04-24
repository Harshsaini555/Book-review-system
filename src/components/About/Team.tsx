import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Harsh Saini",
    role: "Founder/CEO",
    description: "Alice crafts smooth user experiences and ensures the design speaks to every reader.",
    imageUrl: "../../../assets/harsh.png",
  },
  {
    name: "Prakul Dhiman",
    role: "CTO",
    description: "James builds robust systems and ensures Book Review System runs smoothly and fast.",
    imageUrl: "../../../assets/prakul1.png",
  },
  {
    name: "Kshitiz Jaiswal",
    role: "Tech Lead",
    description: "Sophia helps us connect with readers globally and grow our community every day.",
    imageUrl: "../../../assets/kshitiz1.jpg",
  },
  {
    name: "Saurav Dhiman",
    role: "Marketing Lead",
    description: "Daniel ensures the backbone of our system is secure, scalable, and lightning-fast.",
    imageUrl: "../../../assets/saurabh.png",
  },
];

export default function Team() {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">BookVibes Hero's</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4 ">
        {teamMembers.map((member, index) => (
          <Card key={index} className="rounded-3xl  border-none  shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-25 h-25 mb-4">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg font-semibold text-center text-gray-700">{member.name}</CardTitle>
              <p className="text-sm text-amber-500 font-medium">{member.role}</p>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">{member.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
