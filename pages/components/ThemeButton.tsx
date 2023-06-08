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
    <label className="relative  ">
      {/* className=" relative flex justify-center items-center w-[7rem] h-[2rem] space-x-2 " */}
      {/* {currentTheme === "dark" ? (
            <button
              className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme("light")}
            >
              {""}
              <BsFillSunFill/>
            </button>
          ) : (
            <button
              className="bg-gray-100 hover:bg-gray-500 w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme("dark")}
            >
              {""}
              <BsFillMoonFill/>
            </button>
          )} */}
      <select
        className="relative bg-inherit outline-none w-[6rem] appearance-none cursor-pointer border-2 border-[#E71B40] hover:text-[#e71b40] hover:border-black dark:hover:border-white rounded-[24px] p-2 "
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option className="" value="system">
          System
        </option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <span className=" absolute left-[4.5rem] pointer-events-none flex items-center bottom-2.5">
        <MdArrowDownward
          fill="#E71B40"
          className=" "
          size="20px"
        />
      </span>
    </label>
  );
};