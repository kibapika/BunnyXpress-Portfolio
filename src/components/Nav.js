import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const desktopScreen = useMediaQuery("(min-width: 640px)");
  
  return (
    <div className="sm:w-[50%]">
      {desktopScreen ? (
        <div className="flex flex-row justify-around content-center items-center text-[1.1rem] text-[#bcb8b1]">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition duration-300"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition duration-300"
            }
          >
            Contact
          </NavLink>
        </div>
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.8 rounded-md bg-white px-4 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/home"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-black",
                        "block px-4 py-2 text-lg text-center"
                      )}
                    >
                      Home
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/about"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-black",
                        "block px-4 py-2 text-lg text-center"
                      )}
                    >
                      About
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/portfolio"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-black",
                        "block px-4 py-2 text-lg text-center"
                      )}
                    >
                      Portfolio
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/contact"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-black",
                        "block px-4 py-2 text-lg text-center"
                      )}
                    >
                      Contact
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
};

export default Nav;
