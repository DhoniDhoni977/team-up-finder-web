
import { ProfileCard } from "@/components/ProfileCard";
import { SearchFilters } from "@/components/SearchFilters";

// Sample data
const sampleProfiles = [
  {
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js"],
    hackathons: ["Online", "SF Hacks 2024"],
  },
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    location: "Remote",
    skills: ["UI/UX", "Figma", "Frontend"],
    hackathons: ["Global Hackathon", "Design Sprint"],
  },
  {
    name: "Michael Park",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop",
    location: "New York, NY",
    skills: ["Python", "AI/ML", "AWS"],
    hackathons: ["AI Hackathon 2024", "NYC Tech Week"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-transparent bg-clip-text mb-4">
            Find Your Perfect Hackathon Team
          </h1>
          <p className="text-lg text-gray-600">
            Connect with talented developers, designers, and innovators for your next hackathon
          </p>
        </div>

        <SearchFilters />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sampleProfiles.map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
