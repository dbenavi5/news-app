"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="h-8 w-8 cursor-pointer text-blue-400"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="h-8 w-8 cursor-pointer text-slate-700"
        />
      )}
    </div>
  );
}

export default DarkModeButton