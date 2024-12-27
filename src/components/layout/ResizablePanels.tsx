import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";

interface ResizablePanelsProps {
  leftCollapsed?: boolean;
  rightCollapsed?: boolean;
  onLeftToggle?: () => void;
  onRightToggle?: () => void;
  children?: React.ReactNode;
}

const ResizablePanels = ({
  leftCollapsed = false,
  rightCollapsed = false,
  onLeftToggle = () => {},
  onRightToggle = () => {},
  children = (
    <div className="flex items-center justify-center h-full bg-background">
      <p className="text-muted-foreground">Main Content Area</p>
    </div>
  ),
}: ResizablePanelsProps) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full bg-background rounded-lg border"
    >
      {/* Left Panel */}
      <ResizablePanel
        defaultSize={20}
        minSize={5}
        maxSize={30}
        collapsible
        collapsedSize={3}
        className="bg-background"
      >
        <LeftSidebar isCollapsed={leftCollapsed} onToggle={onLeftToggle} />
      </ResizablePanel>

      <ResizableHandle />

      {/* Main Content Panel */}
      <ResizablePanel defaultSize={60} minSize={30} className="bg-background">
        {children}
      </ResizablePanel>

      <ResizableHandle />

      {/* Right Panel */}
      <ResizablePanel
        defaultSize={20}
        minSize={5}
        maxSize={30}
        collapsible
        collapsedSize={3}
        className="bg-background"
      >
        <RightSidebar isCollapsed={rightCollapsed} onToggle={onRightToggle} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizablePanels;
