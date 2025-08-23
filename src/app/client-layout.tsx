'use client';

import { useState, useEffect } from 'react';
import Loader from "@/components/Loader";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return isLoading ? <Loader onComplete={handleLoaderComplete} /> : children;
}
