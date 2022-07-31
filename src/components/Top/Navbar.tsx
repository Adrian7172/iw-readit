import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Articles", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-black md:bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-[1260px] mx-auto px-2 sm:px-6 lg:px-8 py-6">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="text-white text-[26px] font-black ">
                  Read<span className="text-text-color3">it</span>.
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white   md:hidden sm:block">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <div className="flex-1 flex items-center justify-center sm:hidden md:block">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`${
                            item.current
                              ? "text-white px-3 py-2 rounded-md text-[18px] font-normal"
                              : "text-nav-item hover:text-yellow-300 px-3 py-2 rounded-md text-[18px] font-normal"
                          }`}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    item.current
                      ? "text-white px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
