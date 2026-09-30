import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Resume from './Resume';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { staggerContainer } from "../utils/motion";

const navVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const menuVariant = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15 } },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center border-b border-white/[0.06] bg-primary/80 py-3 backdrop-blur-xl`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <p className="flex cursor-pointer text-base font-semibold text-white sm:text-lg">
            Hemanth Karthick
            <span className="ml-2 hidden font-normal text-secondary sm:block">/ Portfolio</span>
          </p>
        </Link>

        <motion.ul
          variants={staggerContainer(0.08, 0.12)}
          initial="hidden"
          animate="visible"
          className="hidden list-none flex-row items-center gap-8 sm:flex"
        >
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className="relative cursor-pointer py-2 text-sm font-medium"
              onClick={() => setActive(nav.title)}
              variants={menuVariant}
            >
              <a
                href={`#${nav.id}`}
                aria-current={active === nav.title ? "location" : undefined}
                className={`transition-colors duration-200 ${active === nav.title ? "text-white" : "text-secondary hover:text-white"}`}
              >
                {nav.title}
              </a>
              {active === nav.title && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute inset-x-0 -bottom-px h-px bg-[#8de4cf]"
                />
              )}
            </motion.li>
          ))}
          <li>
            <Resume />
          </li>
        </motion.ul>

        <div className="relative flex items-center sm:hidden">
          <button
            type="button"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition-colors hover:border-[#8de4cf]/60"
            onClick={() => setToggle((isOpen) => !isOpen)}
          >
            <img src={toggle ? close : menu} alt="" className="h-5 w-5 object-contain" />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                id="mobile-navigation"
                variants={menuVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute right-0 top-14 z-10 min-w-48 rounded-xl border border-white/10 bg-[#11121b]/95 p-5 shadow-2xl backdrop-blur-xl"
              >
                <ul className="flex list-none flex-col gap-4">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-medium ${active === nav.title ? "text-[#8de4cf]" : "text-secondary"}`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`} className="block py-1">{nav.title}</a>
                    </li>
                  ))}
                  <li className="border-t border-white/10 pt-4">
                    <Resume />
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
