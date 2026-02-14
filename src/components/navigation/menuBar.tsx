import { Link, NavLink } from "react-router";
import Images from "../../constants/images.constants";
import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { MoveRight } from "lucide-react";

export const MENUITEMS = [
    {
      item: "About",
      route: "/about",
    },
    {
      item: "Why Student",
      route: "/benefits",
    },
    {
      item: "How it Works",
      route: "/how-it-works",
    },
    {
      item: "Features",
      route: "/features",
    },
  ];
const MenuBar = () => {
  
  return (
    <nav className="flex items-center px-[5vw] md:px-[6vw] py-5 backdrop-blur-2xl">
      <Link to={"/"} className="cursor-pointer mr-[2vw] imgPosition">
        <img src={Images.StudentLogo} className="h-8" alt="" />
      </Link>
      <div className="ml-auto mr-[2vw] md:mr-auto md:ml-[2vw] menuPosition text-black/60">
        <ul className="items-center h-full gap-10 hidden lg:flex">
          {MENUITEMS.map((item,id) => (
            <li key={id}>
              <NavLink
                to={item.route}
                className={({ isActive }) => (isActive ? "link-active" : "")}
                >
                {item.item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <Sheet>
        <SheetTrigger className='lg:hidden' asChild><button className="h-full !pt-[7px]"><IoMenu size={30}/></button></SheetTrigger>
        <SheetContent side='right'>
          <SheetHeader>
            <SheetTitle>Student</SheetTitle>
            <SheetDescription>
            <ul className=' flex flex-col w-full gap-5 px-6 py-1'>
            {MENUITEMS.map((item,id) => (
            <li key={id}>
              <NavLink
                to={item.route}
                className={({ isActive }) => (isActive ? "link-active" : "")}
                >
                {item.item}
              </NavLink>
            </li>
          )) || <li>No menu available</li>}
          </ul>   
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
      <div className="hidden sm:flex gap-4 ml-auto">
          <button className="py-2 px-6 rounded-md bg-primary flex gap-2 text-white">Log In</button>
          <Link className="py-2 px-6 rounded-md border border-primary" to={''}>Sign up</Link>
      </div>
    </nav>
  );
};

export default MenuBar;
