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
        className="text-xl relative transition duration-300 bg-inherit outline-none w-[7rem] appearance-none cursor-pointer hover:text-[#e71b40] dark:hover:border-white rounded-[24px] p-3 [#E71B40] hover:shadow-[0px_0px_10px_1px_] hover:shadow-red-500/20 max-[920px]:shadow-[0px_0px_10px_0.5px] max-[920px]:shadow-neutral-500/20"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">
          System
        </option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <span className=" absolute left-[5.2rem] pointer-events-none flex items-center bottom-2.5 top-3">
        <MdArrowDownward
          fill="#E71B40"
          size="20px"
        />
      </span>
    </label>
  );
};