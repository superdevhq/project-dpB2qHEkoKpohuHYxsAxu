
import { useState } from "react";
import { GripVertical } from "lucide-react";

interface DragDropSectionProps {
  id: string;
  title: string;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  children: React.ReactNode;
}

const DragDropSection = ({
  id,
  title,
  onDragStart,
  onDragOver,
  onDrop,
  children
}: DragDropSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    onDragStart(e, id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      id={id}
      className={`resume-section rounded-lg border bg-card p-4 mb-4 ${
        isDragging ? "opacity-50" : ""
      }`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="drag-handle p-1 rounded hover:bg-muted">
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default DragDropSection;
