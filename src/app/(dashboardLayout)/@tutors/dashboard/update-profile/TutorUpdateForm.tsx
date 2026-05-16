"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import toast from "react-hot-toast";
export default function TutorUpdateForm() {
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const { id } = useUserRole();
  const { data: tutor } = useQuery({
    queryKey: ["tutor-profile"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/tutor/my-profile/${id}`);
      console.log("result is here --->>", res?.data?.data);
      return res.data.data;
    },
  });
  useEffect(() => {
    if (tutor) {
      setBio(tutor.bio || "");
      setExpertise(tutor.expertise || "");
      setHourlyRate(String(tutor.hourlyRate || ""));
    }
  }, [tutor]);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await axiosInstance.patch(`/tutor/updateProfile/${tutor.id}`, {
      bio: bio || tutor?.bio,
      expertise: expertise || tutor?.expertise,
      hourlyRate: Number(hourlyRate || tutor?.hourlyRate),
    });

    toast.success("Tutor profile updated successfully");
  } catch (error) {
    console.log(error);
    toast.error("Failed to update profile");
  }
};

  return (
      <div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <Textarea
              placeholder="Write your bio..."
              // value={bio}
              value={bio || tutor?.bio || ""}
              onChange={(e) => setBio(e.target.value)}
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
          <Button  type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </div>
  );
}
