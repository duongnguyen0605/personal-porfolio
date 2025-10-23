import { FacebookIcon, ZaloIcon } from "../common/icons";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={`md:flex md:flex-row items-center flex-col gap-6 md:gap-0 md:h-footer-heigh h-fit dark:text-gray-200  md:border border-t border-gray-300 dark:border-gray-500 ${className}`}
    >
      <p className="md:border-r border-gray-300 dark:border-gray-500 h-full px-8 flex items-center">
        Find me at
      </p>
      <div className="flex h-full">
        <div className="md:border-r border-gray-300 dark:border-gray-500 h-full px-4 flex items-center cursor-pointer md:hover:bg-gray-200 md:dark:hover:bg-gray-500">
          <span className="hidden dark:block md:[&>svg]:size-8 [&>svg]:size-12">
            <FacebookIcon fill="#e6e7eb" />
          </span>
          <span className="dark:hidden md:[&>svg]:size-8 [&>svg]:size-12">
            <FacebookIcon />
          </span>
        </div>
        <div className="md:border-r border-gray-300 dark:border-gray-500 h-full px-4 flex items-center cursor-pointer md:hover:bg-gray-200 md:dark:hover:bg-gray-500">
          <span className="hidden dark:block md:[&>svg]:size-8 [&>svg]:size-12">
            <ZaloIcon fill="#e6e7eb" />
          </span>
          <span className="dark:hidden md:[&>svg]:size-8 [&>svg]:size-12">
            <ZaloIcon />
          </span>
        </div>
      </div>
      <div className="flex-1"></div>
      <p className="md:border-l border-gray-300 dark:border-gray-500 h-full px-8 flex items-center italic">
        @ 2025 Duong Nguyen
      </p>
    </div>
  );
};

export default Footer;
