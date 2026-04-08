import { Clock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ClassCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconColorClass?: string
  bgColor?: string
  features?: string[]
  duration?: string
  onClick?: () => void
}

function ClassCard({
  title,
  description,
  icon: Icon,
  iconColorClass = "bg-secondary/30 text-accent group-hover:bg-accent/20",
  bgColor = "bg-card",
  features,
  duration,
  onClick,
}: ClassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col border border-border rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 group hover:border-accent/50 ${bgColor} ${onClick ? "cursor-pointer" : ""
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${iconColorClass}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <h3 className="text-xl font-semibold leading-none tracking-tight text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 flex-grow">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mt-auto pt-4 border-t border-border/50">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {duration && (
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50 mt-auto">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          {onClick && (
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Więcej {">"}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default ClassCard;