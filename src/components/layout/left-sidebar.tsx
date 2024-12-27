import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, FolderTree, Settings } from "lucide-react";

interface LeftSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function LeftSidebar({ isCollapsed, onToggle }: LeftSidebarProps) {
  return (
    <div className="flex h-full flex-col gap-4 p-4 relative bg-background">
      <div className={cn("flex flex-col gap-4", isCollapsed && "opacity-0")}>
        <Button variant="ghost" className="justify-start gap-2">
          <FolderTree className="h-4 w-4" />
          <span>Explorer</span>
        </Button>
        <Button variant="ghost" className="justify-start gap-2">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-2"
        onClick={onToggle}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
