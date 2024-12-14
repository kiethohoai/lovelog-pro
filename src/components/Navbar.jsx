import { useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';
import Image from './Image';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-1 text-2xl font-bold">
        <Image
          src="https://ik.imagekit.io/johnho/logo.png"
          path="https://ik.imagekit.io/johnho/logo.png"
          alt="Love Logo "
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <span>ovelog</span>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* Mobile Button */}
        <div
          className="text-3xl cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        >
          {open ? <GrClose /> : <GrMenu />}
        </div>

        {/* Mobile Link Lists */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16
            bg-[#e6e6ff] transition-all ease-in-out gap-8 font-medium text-lg
            ${open ? '-right-0' : '-right-[100%]'}`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-3xl">
              Login 🤞
            </button>
          </a>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="px-4 py-2 bg-blue-800 text-white rounded-3xl">
            Login 🤞
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
