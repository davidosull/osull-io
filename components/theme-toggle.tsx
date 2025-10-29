"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-1 rounded-lg border bg-muted p-1">
        <button
          className="rounded p-1.5 hover:bg-background transition-colors"
          aria-label="Loading theme toggle"
        >
          <Sun className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const themes = [
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "light", icon: Sun, label: "Light" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border bg-muted p-1"
      role="radiogroup"
      aria-label="Theme selection"
    >
      {themes.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${label} theme`}
            title={label}
            className={cn(
              "relative rounded p-1.5 transition-all duration-200 cursor-pointer",
              "hover:bg-background/80 hover:scale-105",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "active:scale-95",
              isActive && "bg-background"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-opacity duration-200",
                isActive ? "opacity-100" : "opacity-70"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
