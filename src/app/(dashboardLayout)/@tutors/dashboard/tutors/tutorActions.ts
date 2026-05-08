import axiosInstance from "@/app/service/axios";
import toast from "react-hot-toast";

export const handleTutorSubmit = async (tutorData: {
  userId: string;
  bio: string;
  expertise: string;
  hourlyRate: number;
}) => {
  try {
    const res = await axiosInstance.post(
      "/tutor/profile",
      tutorData
    );

    toast.success("Tutor created successfully!");

    return res.data;

  } catch (error: any) {

    toast.error("Tutor profile already exists");

    console.log(error);
  }
};