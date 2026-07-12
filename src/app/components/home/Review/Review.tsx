import axiosInstance from "@/app/service/axios";
import ReviewHeader from "./ReviewHeader";
import ReviewSlider from "./ReviewSlider";

async function getAllReview() {
  const res = await axiosInstance.get("/userReview");
  return res.data.data;
}

export default async function Review() {
  const data = await getAllReview();

  return (
    <section className="max-w-7xl mx-auto lg:mb-12 mb-8 px-4 py-12">
      <ReviewHeader />

      <ReviewSlider reviews={data.reviews} />
    </section>
  );
}