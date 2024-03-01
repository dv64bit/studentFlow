import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobNav from "./MobNav";
import GlobarSearch from "../search/GlobarSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <div className="w-7 h-7">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="StudenFlow"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Student<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <GlobarSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: "h-10 w-10" },
              variables: { colorPrimary: "#ff7000" },
            }}
          />
        </SignedIn>
        <MobNav />
      </div>
    </nav>
  );
};

export default Navbar;
