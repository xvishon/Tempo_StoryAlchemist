import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-b border-border h-12 flex items-center px-4 justify-between bg-background">
      <div className="font-semibold">Split Pane UI</div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
