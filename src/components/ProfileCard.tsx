
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail } from "lucide-react";

interface Profile {
  name: string;
  image: string;
  location: string;
  skills: string[];
  hackathons: string[];
}

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <img
          src={profile.image}
          alt={profile.name}
          className="rounded-full w-16 h-16 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{profile.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Interested in Hackathons</h4>
          <div className="flex flex-wrap gap-2">
            {profile.hackathons.map((hackathon) => (
              <Badge key={hackathon} variant="outline">
                {hackathon}
              </Badge>
            ))}
          </div>
        </div>
        <Button className="w-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-white">
          <Mail className="w-4 h-4 mr-2" />
          Contact
        </Button>
      </CardContent>
    </Card>
  );
}
