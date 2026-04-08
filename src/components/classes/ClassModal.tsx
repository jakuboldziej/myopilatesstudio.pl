import type { ClassType } from "@/lib/variables";
import { Clock, X } from "lucide-react"

interface ClassModalProps {
  selectedClass: ClassType | null;
  onClose: () => void;
}

function ClassModal({ selectedClass, onClose }: ClassModalProps) {
  if (!selectedClass) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm text-white"
      onClick={onClose}
    >
      <div
        className="bg-primary w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute z-10 top-4 right-4 p-2 rounded-full hover:bg-black/20 text-foreground transition-colors cursor-pointer"
          aria-label="Zamknij"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8 border-b border-border/50 bg-muted/30">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${selectedClass.color}`}>
            <selectedClass.icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            {selectedClass.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-white mt-2">
            <Clock className="h-4 w-4" />
            <span>{selectedClass.duration}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <p className="text-white whitespace-pre-wrap leading-relaxed">
            {selectedClass.fullDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ClassModal;