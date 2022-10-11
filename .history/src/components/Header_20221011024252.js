import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { MenuIcon, ShoppingCartIcon, SearchIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center p-1 flex-grow py-2 bg-light-primary dark:bg-dark-secondary">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://firebasestorage.googleapis.com/v0/b/markusdavisstore.appspot.com/o/logo.png?alt=media&token=0af606cd-bb13-4314-b5bf-a095e056261e"
            width={50}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer hover:bg-light-secondary dark:hover:bg-dark-primary bg-light-secondary dark:bg-dark-primary">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 bg-light-secondary dark:bg-dark-primary dark:text-white dark:placeholder:text-white placeholder:text-black"
            type="text"
            placeholder="Search store..."
          />
          <SearchIcon className="h-12 p-4 dark:text-white " />
        </div>
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="link">
            <p className="">Hello User</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p className="">Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <Brightness4Icon
            className="cursor-pointer hover:text-primary border border-none rounded-full"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-primary text-center rounded-full font-bold dark:text-white">
              0
            </span>
            <ShoppingCartIcon className="h-10 dark:text-white" />
            <p className="hidden md:inline font-extrabold text-sm">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-light-secondary dark:bg-dark-primary text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1 text-primary" />
          All
        </p>
        <p className="link">Gaming</p>
        <p className="link">Business</p>
        <p className="link">Clothing</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Plus</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
