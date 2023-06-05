import React from "react";
import Link from "@docusaurus/Link";
import NavbarLayout from "@theme/Navbar/Layout";
import SearchBar from "@theme/SearchBar";
import clsx from "clsx";
import ColorModeToggle from "../ColorModeToggle";

import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" {...props} />
);

export const HamburgerMenuButton = ({ toggle, isOpen, ...otherProps }) => (
  <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="items-center flex md:hidden mt-[5px]">
    <button type="button" onClick={toggle} {...otherProps}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            open: { d: "M 3 16.5 L 17 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  </motion.nav>
);

// @todo (Juan): Deduplicate once we improve our theme architecture.
const IconZetaLogo = ({ color, ...otherProps }) => (
  <svg
    width="125"
    height="24"
    viewBox="0 0 125 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M16.807 17.2227V20.4134H3.64454C3.82611 18.3135 4.5037 16.8359 6.84699 14.7584L16.807 6.2615V13.7177H20.3923V0H0.00394715V6.83778H3.58796V3.58533H14.4189L4.50765 12.0428L4.48396 12.0651C0.330245 15.7426 0 18.7108 0 22.208V24H20.391V17.2241H16.8057L16.807 17.2227Z"
      fill={color || "currentColor"}
    />
    <path
      d="M42.3344 12.7129C42.3225 12.7129 42.312 12.7234 42.312 12.7365C42.3844 14.1786 42.9856 16.5074 46.0789 16.5074C48.4656 16.5074 48.955 15.018 49.1471 14.597C49.1511 14.5891 49.1577 14.5838 49.1669 14.5838H51.476C51.4904 14.5838 51.4996 14.597 51.497 14.6101C51.3562 15.393 50.1484 18.4573 46.0789 18.4573C42.0094 18.4573 40.0134 15.3996 40.0134 12.0984C40.0134 8.05917 42.5567 5.71193 45.9986 5.71193C49.2077 5.71193 51.6102 8.13812 51.6102 11.1893C51.6102 11.3669 51.6062 11.5813 51.597 11.83C51.5878 12.0747 51.5575 12.3629 51.5062 12.6931C51.5049 12.7037 51.4957 12.7115 51.4852 12.7115H42.3344V12.7129ZM45.946 7.50262C43.0383 7.50262 42.3396 9.66961 42.3396 10.9261C42.3396 10.938 42.3488 10.9498 42.362 10.9498H49.3445C49.3563 10.9498 49.3655 10.9393 49.3669 10.9274C49.4484 9.53804 48.509 7.50262 45.946 7.50262Z"
      fill={color || "currentColor"}
    />
    <path
      d="M60.1754 18.1454C60.1754 18.156 60.1675 18.1652 60.157 18.1665C59.9281 18.2007 59.6268 18.2362 59.2531 18.2704C58.8702 18.306 58.4821 18.3244 58.0913 18.3244C56.1006 18.3244 54.2705 17.6099 54.2705 14.0759V8.00521C54.2705 7.99337 54.2613 7.98284 54.2481 7.98284H52.0469C52.0351 7.98284 52.0246 7.97363 52.0246 7.96047V6.054C52.0246 6.04216 52.0338 6.03163 52.0469 6.03163H54.2481C54.26 6.03163 54.2705 6.02242 54.2705 6.00926V1.96475C54.2705 1.95291 54.2797 1.94238 54.2929 1.94238H56.5743C56.5861 1.94238 56.5967 1.95159 56.5967 1.96475V6.00926C56.5967 6.02111 56.6059 6.03163 56.619 6.03163H59.7281C59.7399 6.03163 59.7505 6.04084 59.7505 6.054V7.96047C59.7505 7.97232 59.7412 7.98284 59.7281 7.98284H56.619C56.6072 7.98284 56.5967 7.99205 56.5967 8.00521V13.5496C56.5967 16.0982 57.6387 16.1863 58.6005 16.1863H59.4426C59.7386 16.1863 59.9754 16.1627 60.1504 16.114C60.1636 16.11 60.1767 16.1206 60.1767 16.135V18.1454H60.1754Z"
      fill={color || "currentColor"}
    />
    <path
      d="M73.2222 6.05538V18.1429C73.2222 18.1547 73.213 18.1652 73.1998 18.1652H70.946C70.9342 18.1652 70.9237 18.156 70.9237 18.1429V16.1377C70.9237 16.1154 70.8934 16.1075 70.8842 16.1285C70.4763 16.935 69.1106 18.4586 66.6752 18.4586C63.432 18.4586 60.4492 15.9127 60.4492 12.0998C60.4492 9.0039 62.6531 5.71329 66.6752 5.71329C68.9527 5.71329 70.4184 7.11584 70.8842 8.04342C70.8947 8.06316 70.9237 8.05658 70.9237 8.03421V6.05538C70.9237 6.04353 70.9329 6.03301 70.946 6.03301H73.1998C73.2117 6.03301 73.2222 6.04222 73.2222 6.05538ZM66.8094 16.3745C69.6698 16.3745 70.925 14.0641 70.925 12.0998C70.925 9.82359 69.3185 7.79739 66.8094 7.79739C63.9701 7.79739 62.7478 10.2196 62.7478 12.0998C62.7478 13.9799 63.903 16.3745 66.8094 16.3745Z"
      fill={color || "currentColor"}
    />
    <path
      d="M31.8928 12.0142C29.839 13.8707 29.6759 15.3666 29.6759 17.1284V18.1639H39.0911V16.0916H31.7626C31.8705 15.1811 32.2112 14.5022 33.2375 13.572L39.0911 8.63938V6.02241H29.668V8.09467H36.5597L31.9192 11.9892L31.8928 12.0129V12.0142Z"
      fill={color || "currentColor"}
    />
    <path
      d="M80.9689 18.4156C82.5809 18.4156 84.0952 17.6096 84.8279 16.3884V18.2202H87.1971V0.756836H84.8279V7.71778C84.0952 6.52098 82.6297 5.71498 80.9444 5.71498C77.1831 5.71498 75.0582 8.40166 75.0582 12.0653C75.0582 15.729 77.1831 18.4156 80.9689 18.4156ZM77.4518 12.0653C77.4518 9.50075 78.9416 7.79105 81.2375 7.79105C83.509 7.79105 85.0233 9.50075 85.0233 12.0653C85.0233 14.6299 83.509 16.3396 81.2375 16.3396C78.9416 16.3396 77.4518 14.6299 77.4518 12.0653Z"
      fill={color || "currentColor"}
    />
    <path
      d="M95.0853 18.4156C98.7734 18.4156 101.411 15.7534 101.411 12.0653C101.411 8.37723 98.7734 5.71498 95.0853 5.71498C91.3973 5.71498 88.735 8.37723 88.735 12.0653C88.735 15.7534 91.3973 18.4156 95.0853 18.4156ZM91.153 12.0653C91.153 9.5496 92.7406 7.79105 95.0853 7.79105C97.4057 7.79105 98.9932 9.5496 98.9932 12.0653C98.9932 14.581 97.4057 16.3396 95.0853 16.3396C92.7406 16.3396 91.153 14.581 91.153 12.0653Z"
      fill={color || "currentColor"}
    />
    <path
      d="M108.764 18.4156C111.915 18.4156 114.089 16.6571 114.479 14.0681H112.135C111.744 15.4603 110.523 16.3396 108.837 16.3396C106.395 16.3396 105.149 14.4345 105.149 12.0653C105.149 9.69615 106.371 7.79105 108.813 7.79105C110.498 7.79105 111.89 8.81687 112.11 10.2091H114.479C114.137 7.42468 111.646 5.71498 108.764 5.71498C104.905 5.71498 102.682 8.67033 102.682 12.0653C102.682 15.4603 104.905 18.4156 108.764 18.4156Z"
      fill={color || "currentColor"}
    />
    <path
      d="M120.259 18.4156C123.043 18.4156 124.875 16.9746 124.875 14.7276C124.875 9.10996 117.816 12.2363 117.816 9.18324C117.816 8.23069 118.671 7.59565 119.966 7.59565C121.016 7.59565 122.359 8.15741 122.53 9.57403H124.777C124.631 7.25371 122.75 5.71498 119.966 5.71498C117.401 5.71498 115.594 7.13159 115.594 9.25651C115.594 14.5077 122.579 11.5036 122.579 14.7764C122.579 15.6801 121.651 16.4373 120.259 16.4373C118.647 16.4373 117.645 15.6313 117.499 14.2147H115.276C115.447 16.8036 117.352 18.4156 120.259 18.4156Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export default function Navbar() {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <>
      <NavbarLayout className="bg-white! dark:bg-black!" style={{ zIndex: "99999999 !important" }}>
        <div className="flex items-center justify-between w-full px-2 md:px-[15px] bg-white! dark:bg-black!">
          <div className="w-full flex gap-3 sm:gap-6 items-center">
            <HamburgerMenuButton isOpen={mobileSidebar.shown} toggle={mobileSidebar.toggle} />

            <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4">
              <Link href="/">
                <IconZetaLogo className="text-green-700 dark:text-grey-50 w-[100px] sm:w-auto" />
              </Link>

              <SearchBar />
            </div>
          </div>

          <div className="flex items-center gap-9">
            <a
              className="no-underline hover:text-green-200 hover:no-underline text-[14px] hidden md:block"
              href="https://www.zetachain.com/whitepaper.pdf"
              target={"_blank"}
            >
              Whitepaper
            </a>

            <a
              className="no-underline hover:text-green-200 hover:no-underline text-[14px] hidden md:block"
              href="https://explorer.zetachain.com/"
              target={"_blank"}
            >
              Explorer
            </a>

            <a
              className="no-underline hover:text-green-200 hover:no-underline text-[14px] hidden md:block"
              href="https://link3.to/zetachain"
              target={"_blank"}
            >
              Community
            </a>

            <a
              className="no-underline hover:text-green-200 hover:no-underline text-[14px] hidden md:block"
              href="https://blog.zetachain.com/"
              target={"_blank"}
            >
              Blog
            </a>

            <ColorModeToggle className="hidden md:flex" />
          </div>
        </div>
      </NavbarLayout>
    </>
  );
}
