import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    
    html.classList.remove('light', 'dark');
    html.classList.add(isDark ? 'dark' : 'light');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    

    console.log(`Theme set to: ${isDark ? 'dark' : 'light'}`);
    console.log('Current HTML classes:', html.className);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`p-2 rounded-full ${
        isDark ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-blue-600'
      }`}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}