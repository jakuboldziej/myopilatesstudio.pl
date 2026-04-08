import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CustomLink from "../custom/CustomLink";
import ClassCard from "../classes/ClassCard";
import { classTypes } from "@/lib/variables";
import ClassModal from "../classes/ClassModal";
import type { ClassType } from "@/lib/variables";

export function ServicesSection() {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);

  return (
    <section className="py-24 bg-card relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Nasze Usługi
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Znajdź Swoją Idealną Praktykę
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Od początkujących po zaawansowanych praktyków, oferujemy różnorodne
            zajęcia dopasowane do Twojego poziomu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classTypes.map((classType) => (
            <ClassCard
              key={classType.name}
              title={classType.name}
              description={classType.shortDescription}
              icon={classType.icon}
              iconColorClass={classType.color}
              duration={classType.duration}
              bgColor="bg-background"
              onClick={() => setSelectedClass(classType)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center text-center mt-12">
          <CustomLink to="/zajecia">
            Zobacz Nasze Zajęcia
            <ArrowRight className="ml-2 h-4 w-4" />
          </CustomLink>
        </div>
      </div>

      <ClassModal
        selectedClass={selectedClass}
        onClose={() => setSelectedClass(null)}
      />
    </section>
  )
}