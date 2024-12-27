import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Settings,
  Home,
  Layout,
  Moon,
  Sun,
  HelpCircle,
} from "lucide-react";

interface CommandMenuDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const defaultCommands = [
  {
    group: "Navigation",
    items: [
      { icon: <Home className="h-4 w-4 mr-2" />, label: "Home", shortcut: "H" },
      {
        icon: <Layout className="h-4 w-4 mr-2" />,
        label: "Dashboard",
        shortcut: "D",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        icon: <Settings className="h-4 w-4 mr-2" />,
        label: "Settings",
        shortcut: "S",
      },
      {
        icon: <Moon className="h-4 w-4 mr-2" />,
        label: "Toggle Theme",
        shortcut: "T",
      },
      {
        icon: <HelpCircle className="h-4 w-4 mr-2" />,
        label: "Help",
        shortcut: "?",
      },
    ],
  },
];

const CommandMenuDialog = ({
  open = true,
  onOpenChange = () => {},
}: CommandMenuDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 bg-background">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <ScrollArea className="h-[300px]">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {defaultCommands.map((group) => (
                <CommandGroup key={group.group} heading={group.group}>
                  {group.items.map((item) => (
                    <CommandItem
                      key={item.label}
                      onSelect={() => {
                        // Handle command selection
                        console.log(`Selected: ${item.label}`);
                      }}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        {item.shortcut}
                      </kbd>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </ScrollArea>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default CommandMenuDialog;
