import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Day() {
  return (
    <div>
      {" "}
      <SelectTrigger  className="w-full">
        <SelectValue placeholder="Select Day" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem  value="Saturday">Saturday</SelectItem>

        <SelectItem value="Sunday">Sunday</SelectItem>

        <SelectItem value="Monday">Monday</SelectItem>

        <SelectItem value="Tuesday">Tuesday</SelectItem>

        <SelectItem value="Wednesday">Wednesday</SelectItem>

        <SelectItem value="Thursday">Thursday</SelectItem>

        <SelectItem value="Friday">Friday</SelectItem>
      </SelectContent>
    </div>
  );
}
