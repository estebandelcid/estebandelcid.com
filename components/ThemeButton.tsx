import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdArrowDownward } from "react-icons/md";



export default function ThemeButton () {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <label className="relative">
      <select
        className="text-xl text-black/60 relative transition duration-300 bg-inherit outline-none w-[7rem] appearance-none cursor-pointer hover:text-black rounded-3xl p-[0.75rem_2.75rem_0.75rem_1.2rem] 
        shadow-custom
        dark:text-white/60 dark:hover:text-white dark:shadow-none"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="m">
          System
        </option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <span className=" absolute left-[5.1rem] pointer-events-none flex items-center bottom-2.5 top-3">
        <MdArrowDownward 
          fill="#E71B40"
          size="1.25rem"
        />
      </span>
    </label>
  );
};