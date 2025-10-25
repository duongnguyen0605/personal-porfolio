import { FacebookIcon, ZaloIcon } from "../common/icons";
import QrCode from "../../assets/images/qr-zalo.jpg";
import { useEffect, useRef, useState } from "react";

export const Footer = ({ className }: { className?: string }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenDialog(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`md:flex md:flex-row items-center flex-col gap-6 md:gap-0 md:h-footer-heigh h-fit dark:text-gray-200  md:border border-t border-gray-300 dark:border-gray-500 ${className}`}
    >
      <p className="md:border-r border-gray-300 dark:border-gray-500 h-full px-8 flex items-center">
        Find me at
      </p>
      <div className="flex h-full">
        <a
          href="https://www.facebook.com/duongvippro08?locale=vi_VN"
          target="_blank"
          className="md:border-r border-gray-300 dark:border-gray-500 h-full px-4 flex items-center cursor-pointer md:hover:bg-gray-200 md:dark:hover:bg-gray-500"
        >
          <span className="hidden dark:block md:[&>svg]:size-8 [&>svg]:size-12">
            <FacebookIcon fill="#e6e7eb" />
          </span>
          <span className="dark:hidden md:[&>svg]:size-8 [&>svg]:size-12">
            <FacebookIcon />
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpenDialog(true)}
          className="md:border-r border-gray-300 dark:border-gray-500 h-full px-4 flex items-center cursor-pointer md:hover:bg-gray-200 md:dark:hover:bg-gray-500"
        >
          <span className="hidden dark:block md:[&>svg]:size-8 [&>svg]:size-12">
            <ZaloIcon fill="#e6e7eb" />
          </span>
          <span className="dark:hidden md:[&>svg]:size-8 [&>svg]:size-12">
            <ZaloIcon />
          </span>
        </button>
      </div>
      <div className="flex-1"></div>
      <p className="md:border-l border-gray-300 dark:border-gray-500 h-full px-8 flex items-center italic">
        @ 2025 Duong Nguyen
      </p>
      <>
        <div
          className={`absolute top-0 left-0 bg-gray-50 w-full h-full z-10 transition-all duration-500 ease-in-out ${
            openDialog ? "opacity-20 visible" : "opacity-0 invisible"
          }`}
        ></div>
        <div
          id="default-modal"
          aria-hidden="true"
          className={`absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
            openDialog
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-95"
          }`}
          ref={ref}
        >
          <img src={QrCode} alt="zalo-qr-code" />
        </div>
      </>
    </div>
  );
};

export default Footer;
