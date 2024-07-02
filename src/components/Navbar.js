import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const token = Cookie.get("token");
  const router = useRouter();

  useEffect(() => {
    setIsAuth(!!token);
  }, [token]);
  const handleLogout = () => {
    Cookie.remove("token"); // This removes the token cookie
    setIsAuth(false);       // Update the authentication state
    router.push("/");
  };
  return (
    <nav className="bg-custom-bg text-white p-4 fixed inset-x-0 top-0 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">My App</h1>
        <div className="space-x-4">
          {isAuth ? (
            <>
              <Link className="hover:text-gray-800" href="/">
               Main
              </Link>
              <Link className="hover:text-gray-800" href="/Posts">
                Posts
              </Link>
              <button onClick={handleLogout} className="text-white bg-transparent hover:bg-gray-800 px-4 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="hover:text-gray-800" href="/Posts">
                Posts
              </Link>
              <Link className="hover:text-gray-800" href="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
