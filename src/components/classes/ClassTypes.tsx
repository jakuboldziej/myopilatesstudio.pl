import { useState } from "react";
import ClassCard from "./ClassCard"
import { classTypes } from "@/lib/variables";
import ClassModal from "./ClassModal";
import type { ClassType } from "@/lib/variables";

function ClassTypes() {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);

  return (
    <section className="py-20 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Rodzaje zajęć
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferujemy różnorodne zajęcia dopasowane do Twojego poziomu doświadczenia i celów fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classTypes.map((classType) => (
            <ClassCard
              key={classType.id}
              title={classType.name}
              description={classType.shortDescription}
              icon={classType.icon}
              iconColorClass={classType.color}
              duration={classType.duration}
              bgColor="bg-card"
              // Update local state on click
              onClick={() => setSelectedClass(classType)}
            />
          ))}
        </div>
      </div>

      <ClassModal
        selectedClass={selectedClass}
        onClose={() => setSelectedClass(null)}
      />
    </section>
  )
}

export default ClassTypes;