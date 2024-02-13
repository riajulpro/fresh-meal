import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="w-10/12 mx-auto flex items-center justify-between py-3">
      <div>
        <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
          FreshMeal
        </h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
