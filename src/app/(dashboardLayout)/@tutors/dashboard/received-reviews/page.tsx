"use client"
import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import { useQuery } from "@tanstack/react-query";


export default function ReceivedReviews() {
  const { id } = useUserRole();

  const { data: reviews } = useQuery({
    queryKey: ["tutor-received-reviews", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/reviews/received/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });

  return (
    <div>
      {reviews?.map((r: any) => (
        <div key={r.id} className="border p-4 rounded-xl">
          <h2 className="font-bold">{r.reviewer.name}</h2>
          <p className="text-sm text-gray-500">{r.reviewer.email}</p>

          <p className="mt-2">⭐ {r.rating}/5</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}
