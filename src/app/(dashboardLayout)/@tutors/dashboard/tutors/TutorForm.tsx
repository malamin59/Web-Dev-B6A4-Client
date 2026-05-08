import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleTutorSubmit } from "./tutorActions";
import { useUserRole } from "@/hooks/userRole";

export default function TutorForm() {
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  const { id } = useUserRole();
  console.log("user id -->>", id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleTutorSubmit({
        userId: id as string,
        bio,
        expertise,  
        hourlyRate: Number(hourlyRate),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Bio</label>
          <Textarea
            placeholder="Write your bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Expertise</label>
          <Input
            type="text"
            placeholder="Math, English..."
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Hourly Rate</label>
          <Input
            type="number"
            placeholder="20"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Create Profile
        </Button>
      </form>
    </div>
  );
}
