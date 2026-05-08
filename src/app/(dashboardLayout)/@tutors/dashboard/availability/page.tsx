"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/app/service/axios";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import Day from "./Day";
import { useUserRole } from "@/hooks/userRole";

export default function AvailabilityPage() {
  const [tutorId, setTutorId] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const { id } = useUserRole();

  useEffect(() => {
    const getTutorProfile = async () => {
      const res = await axiosInstance.get(`/tutor/my-profile/${id}`);

      setTutorId(res.data.data.id);
    };

    if (id) {
      getTutorProfile();
    }
  }, [id]);

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/tutor/availability", {
        tutorId: tutorId,

        day,
        startTime,
        endTime,
      });

      toast.success("Availability added successfully");

      setDay("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <Card>
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-6">Add Availability</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Select onValueChange={setDay} value={day}>
              <Day />
            </Select>

            <Input
              type="time"
              placeholder="Start Time"
              value={startTime}
              required
              onChange={(e) => setStartTime(e.target.value)}
            />

            <Input
              type="time"
              placeholder="End Time"
              value={endTime}
              required
              onChange={(e) => setEndTime(e.target.value)}
            />

            <Button type="submit" className="w-full">
              Add Availability
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
