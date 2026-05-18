import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  bio: string;
  expertise: string;
  hourlyRate: string;
  tutor: any;

  setBio: (value: string) => void;
  setExpertise: (value: string) => void;
  setHourlyRate: (value: string) => void;
};
const Box_Max =200

export default function TutorFormFields({
  bio,
  expertise,
  hourlyRate,
  tutor,
  setBio,
  setExpertise,
  setHourlyRate,
}: Props) {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium">Bio</label>

        <Textarea
            placeholder="Tell students about your teaching style and background…"
          value={bio || tutor?.bio || ""}
          onChange={(e) => setBio(e.target.value)}
          maxLength={Box_Max}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Expertise</label>

        <Input
          type="text"
          placeholder="Math, English..."
          value={expertise || tutor?.expertise || ""}
          onChange={(e) => setExpertise(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Hourly Rate</label>

        <Input
          type="number"
          placeholder="20"
          value={hourlyRate || tutor?.hourlyRate || ""}
          onChange={(e) => setHourlyRate(e.target.value)}
        />
      </div>
    </>
  );
}
