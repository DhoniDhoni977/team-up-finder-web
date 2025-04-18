
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export function SearchFilters() {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search teammates..."
          className="pl-9"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Skills" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Remote/Online</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Hackathon Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="in-person">In-Person</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-white">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </div>
  );
}
