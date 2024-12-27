import { MainLayout } from "./layout/main-layout";
import { CommandMenu } from "./command-menu";

function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to Split Pane UI</h1>
        <p className="text-muted-foreground">
          Press <kbd className="px-2 py-1 bg-muted rounded">⌘K</kbd> to open
          command menu
        </p>
      </div>
      <CommandMenu />
    </MainLayout>
  );
}

export default Home;
