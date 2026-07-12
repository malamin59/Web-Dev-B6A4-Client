"use client";
import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";
interface BannerProps {
  totalTutor: number;
}
export default function Banner({ totalTutor }: BannerProps) {
  return (
    <section className="w-ful lg:mb-16 mb-10">
      <div className="max-w-7xl mx-auto ">
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 items-center ">
            <BannerContent totalTutor={totalTutor} />
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
}
