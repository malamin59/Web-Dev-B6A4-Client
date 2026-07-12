import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export default function ReviewForm() {
  return (
    <div>
      {" "}
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Review Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="e.g. Excellent learning platform"
        />
      </div>
      {/* Description */}
      <div className="space-y-2 mt-2">
        <Label htmlFor="description">Your Experience</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Tell others about your experience with SkillBridge..."
          rows={4}
          maxLength={200}
        />
        <p className="text-xs text-muted-foreground">Maximum 200 characters.</p>
      </div>
      {/* Submit */}
      <Button type="submit" className="w-full">
        Submit Review
      </Button>
    </div>
  );
}
