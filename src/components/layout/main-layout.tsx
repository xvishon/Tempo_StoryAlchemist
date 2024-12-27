import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TopBar } from "./top-bar";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-background">
      <TopBar />
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel
          defaultSize={20}
          collapsible
          collapsedSize={4}
          minSize={15}
          maxSize={30}
          collapsed={isLeftCollapsed}
          className={cn(
            "bg-muted/40",
            isLeftCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <LeftSidebar
            isCollapsed={isLeftCollapsed}
            onToggle={() => setIsLeftCollapsed(!isLeftCollapsed)}
          />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            {children}
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          defaultSize={20}
          collapsible
          collapsedSize={4}
          minSize={15}
          maxSize={30}
          collapsed={isRightCollapsed}
          className={cn(
            "bg-muted/40",
            isRightCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <RightSidebar
            isCollapsed={isRightCollapsed}
            onToggle={() => setIsRightCollapsed(!isRightCollapsed)}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
