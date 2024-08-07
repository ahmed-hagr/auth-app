import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, MenuButton, Transition, MenuItem } from '@headlessui/react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

import { logout } from "../../store/slices/authSlice";
import { resetCart } from "../../store/slices/cartSlice";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const token = Cookie.get("token");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    setIsAuth(!!token);
  }, [token]);

  const handleLogout = () => {
    Cookie.remove("token");
    dispatch(logout());
    dispatch(resetCart());
    router.push("/");
  };

  return (
    <Disclosure as="nav" className="bg-custom-bg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {isAuth&& (
                      <>
                        <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link href="/cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</Link>
                      </>
                    ) }
                  </div>
                </div>
              </div>
              {isAuth ? (
                <div className="hidden md:flex md:items-center md:ml-6">
                  <Menu as="div" className="relative">
                    <MenuButton className=" flex text-sm  ">
                      <span className="sr-only">Open user menu</span>
                      <FaUserCircle className="h-8 w-8 text-gray-400" />
                      <span className="ml-3 text-white ">{user}</span>
                    </MenuButton>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                            >
                              Logout
                            </button>
                          )}
                        </MenuItem>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ): (
                
                <Link href="/login" className=" hidden md:flex md:items-center md:ml-6 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              )}
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isAuth ? (
                <>
                  <Link href="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>
                  <Link href="/cart" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Cart</Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Login</Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
