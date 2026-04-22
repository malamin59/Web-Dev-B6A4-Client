import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SkillCardProps } from "@/types/SkillCardProps"



export function SkillCard({
  title,
  description,
  icon: Icon,
  courses,
}: SkillCardProps) {
  return (
    <Card className="group bg-background/60 backdrop-blur border hover:shadow-xl transition duration-300 hover:-translate-y-1">
      
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="text-3xl p-3 rounded-xl bg-primary/10 text-primary">
          <Icon />
        </div>
        <div>
          <CardTitle className="text-lg group-hover:text-primary transition">
            {title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {courses}+ Courses
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>

        <Button className="w-full">
          Explore
        </Button>
      </CardContent>
    </Card>
  )
}