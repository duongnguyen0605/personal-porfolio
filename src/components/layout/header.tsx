import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    Name: "Home",
    to: "/",
  },
  {
    Name: "About",
    to: "/about",
  },
  {
    Name: "Skills",
    to: "/skills",
  },
  {
    Name: "Resume",
    to: "/resume",
  },
  {
    Name: "Projects",
    to: "/projects",
  },
];
const Header = () => {
  const [isDarkMode, setisDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const changeModeHandler = () => {
    setisDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="h-header-heigh">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mx-auto h-full">
        <NavLink
          to={"/"}
          className="flex flex-col  items-center justify-center px-4 h-full"
        >
          <span className="self-center text-[20px] font-semibold whitespace-nowrap dark:text-gray-200">
            Duong Nguyen
          </span>
          <span className="italic text-base text-green-600 dark:text-green-300">
            -- frontend --
          </span>
        </NavLink>
        <div className="flex items-center gap-4 px-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => menuHandler()}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => changeModeHandler()}
            className="cursor-pointer md:hidden flex items-center hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600 p-2 rounded-lg"
          >
            {isDarkMode ? (
              <span className="material-symbols-outlined dark:text-gray-200">
                dark_mode
              </span>
            ) : (
              <span className="material-symbols-outlined">light_mode</span>
            )}
          </button>
        </div>
        <div
          className={`${
            openMenu ? "" : "hidden"
          } w-full md:block md:w-auto relative z-10 flex flex-col h-full`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col justify-center p-4 md:p-0 border border-gray-100 rounded-b-lg md:flex-row md:mt-0 md:border-0 dark:border-gray-500 md:bg-inherit bg-gray-200 dark:bg-gray-400 md:dark:bg-inherit md:h-full h-fit">
            {menu.map((item, index) => (
              <li
                className={`${
                  index === 0 ? "" : ""
                } md:flex md:items-center justify-center md:w-[100px] md:border-gray-300`}
              >
                <NavLink
                  to={item.to}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-green-500 md:text-green-500 md:dark:text-green-500"
                        : ""
                    } block py-2 px-3 justify-center text-gray-900 rounded-sm md:bg-transparent dark:text-gray-200 text-lg font-bold md:p-0 md:hover:text-green-500 hover:bg-green-500 md:hover:bg-inherit`
                  }
                >
                  {item.Name}
                </NavLink>
              </li>
            ))}

            <li className="flex items-center px-6">
              <button
                type="button"
                onClick={() => changeModeHandler()}
                className="cursor-pointer md:block hidden "
              >
                {isDarkMode ? (
                  <span className="material-symbols-outlined dark:text-gray-200 text-lg font-bold hover:text-green-500">
                    dark_mode
                  </span>
                ) : (
                  <span className="material-symbols-outlined hover:text-green-500">
                    light_mode
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
