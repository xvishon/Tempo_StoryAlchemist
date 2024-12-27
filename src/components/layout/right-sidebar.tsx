import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Info, MessageSquare } from "lucide-react";

interface RightSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function RightSidebar({ isCollapsed, onToggle }: RightSidebarProps) {
  return (
    <div className="flex h-full flex-col gap-4 p-4 relative bg-background">
      <div className={cn("flex flex-col gap-4", isCollapsed && "opacity-0")}>
        <Button variant="ghost" className="justify-start gap-2">
          <Info className="h-4 w-4" />
          <span>Details</span>
        </Button>
        <Button variant="ghost" className="justify-start gap-2">
          <MessageSquare className="h-4 w-4" />
          <span>Comments</span>
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-2"
        onClick={onToggle}
      >
        {isCollapsed ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
