import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopBarProps {
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
}

const TopBar = ({ theme = "light", onThemeChange = () => {} }: TopBarProps) => {
  return (
    <div className="h-[60px] border-b bg-background flex items-center justify-between px-4">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Story Alchemist</h1>
      </div>
      {/* Center section */}
      <div className="flex-1 flex justify-center">
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Library</Button>
          <Button variant="ghost">Elements</Button>
          <Button variant="ghost">Lab</Button>
          <Button variant="ghost">Sctiptorium</Button>
          <Button variant="ghost">Conclave</Button>
          <Button variant="ghost">Study</Button>
          <Button variant="ghost">Forge</Button>
        </nav>
      </div>
      {/* Right section */}
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              {theme === "light" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onThemeChange("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onThemeChange("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon">
          {/* Placeholder for user avatar/profile */}
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=default"
            alt="User avatar"
            className="w-6 h-6 rounded-full"
          />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
