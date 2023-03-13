import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkMode";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer font-bold text-slate-700 dark:text-blue-400" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-6 decoration-blue-400">
              LIVE
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton/>
          <button className="hidden md:inline bg-slate-700 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-blue-400">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
