import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

export const App = () => {
  return (
    <div className="h-full flex flex-col light-background dark:dark-background">
      <Header />
      <div className="md:h-[calc(100%_-_var(--spacing-header-heigh)_-_var(--spacing-footer-heigh))] h-[calc(100%_-_var(--spacing-header-heigh))] overflow-y-auto overflow-x-hidden scroll-bar xl:px-[10rem] md:px-8 md:py-[4rem] pb-0 pt-[4rem] px-4">
        <Outlet />
        <Footer className="md:hidden flex flex-col -mx-4 mt-16 border-t border-gray-300 pb-16 pt-10"></Footer>
      </div>
      <Footer className="hidden md:flex"></Footer>
    </div>
  );
};

export default App;
