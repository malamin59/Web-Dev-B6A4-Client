"use client";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import toast from "react-hot-toast";
import TutorFormFields from "./TutorFormFields";
import UpdateButton from "./UpdateButton";

export default function TutorUpdateForm() {
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const { id } = useUserRole();

  const { data: tutor, isLoading } = useQuery({
    queryKey: ["tutor-profile"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/tutor/my-profile/${id}`);
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

  const updateMutation = useMutation({
    mutationFn: async () => {
      return await axiosInstance.patch(`/tutor/updateProfile/${tutor.id}`, {
        bio: bio || tutor?.bio,
        expertise: expertise || tutor?.expertise,
        hourlyRate: Number(hourlyRate || tutor?.hourlyRate),
      });
    },
    onSuccess: () => {
      toast.success("Tutor profile updated successfully");
      // setTimeout(() => updateMutation.reset(), 2000);
    },
    onError: () => {
      toast.error("Failed to update profile");
    },
  });

  const isPending = updateMutation.isPending;
  const isSuccess = updateMutation.isSuccess;
  const isError = updateMutation.isError;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasChanges =
      bio !== (tutor?.bio || "") ||
      expertise !== (tutor?.expertise || "") ||
      hourlyRate !== String(tutor?.hourlyRate || "");

    if (!hasChanges) {
      toast("No changes to save", { icon: "💡" });
      return;
    }
    updateMutation.mutate();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <TutorFormFields
          bio={bio}
          expertise={expertise}
          hourlyRate={hourlyRate}
          tutor={tutor}
          setBio={setBio}
          setExpertise={setExpertise}
          setHourlyRate={setHourlyRate}
        />
        <UpdateButton
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
        />
      </form>
    </div>
  );
}
