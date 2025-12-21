import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function DotOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(0 0% 50% / 0.25) 1.5px, transparent 1.5px)`,
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DotOverlay />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
