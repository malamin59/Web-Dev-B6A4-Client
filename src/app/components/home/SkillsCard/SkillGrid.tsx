import { skills } from "@/app/data/skills";
import { SkillCard } from "./SkillsCard";


export function SkillGrid() {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Explore Skills</h2>
        <p className="text-muted-foreground">
          Learn, build and grow with SkillBridge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  )
}