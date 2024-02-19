import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/10">
      <div className="w-10/12 mx-auto flex items-center justify-between py-3">
        <div>
          <h1 className="text-xs lg:text-xl font-extrabold text-white">
            <Link href="/">FreshMeal</Link>
          </h1>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
