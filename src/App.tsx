import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { useEffect, useRef, useState } from "react";

export const App = () => {
  const clipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    contentRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-full flex flex-col light-background dark:dark-background">
      <Header ref={clipRef} />
      <div
        ref={contentRef}
        className="md:h-[calc(100%_-_var(--spacing-header-heigh)_-_var(--spacing-footer-heigh))] h-[calc(100%_-_var(--spacing-header-heigh))] overflow-y-auto overflow-x-hidden scroll-bar xl:px-[10rem] md:px-8 md:py-[4rem] pb-0 pt-[4rem] px-4"
      >
        <Outlet />
        <Footer className="md:hidden flex flex-col -mx-4 mt-16 border-t border-gray-300 pb-16 pt-10"></Footer>
      </div>
      <Footer className="hidden md:flex"></Footer>
      <div
        ref={clipRef}
        className="z-0 fixed top-4 right-6 w-0 h-0 rounded-full dark-background pointer-events-none mix-blend-multiply"
      ></div>
      <button
        type="button"
        onClick={handleScrollTop}
        className={`${
          isVisible ? "flex" : "hidden"
        } fixed bottom-[4.5rem] right-[1.5rem] cursor-pointer size-12 border border-gray-400 flex items-center justify-center rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500`}
      >
        <span className="material-symbols-outlined text-gray-800 dark:text-white">
          arrow_upward
        </span>
      </button>
    </div>
  );
};

export default App;
