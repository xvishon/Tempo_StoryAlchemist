import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import ResizablePanels from "./ResizablePanels";
import CommandMenuDialog from "./CommandMenuDialog";

interface MainLayoutProps {
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
}

const MainLayout = ({
  theme = "light",
  onThemeChange = () => {},
}: MainLayoutProps) => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  // Handle ESC key press for command menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCommandMenuOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-background">
      <TopBar theme={theme} onThemeChange={onThemeChange} />

      <div className="flex-1 overflow-hidden">
        <ResizablePanels
          leftCollapsed={leftCollapsed}
          rightCollapsed={rightCollapsed}
          onLeftToggle={() => setLeftCollapsed((prev) => !prev)}
          onRightToggle={() => setRightCollapsed((prev) => !prev)}
        />
      </div>

      <CommandMenuDialog
        open={commandMenuOpen}
        onOpenChange={setCommandMenuOpen}
      />
    </div>
  );
};

export default MainLayout;
