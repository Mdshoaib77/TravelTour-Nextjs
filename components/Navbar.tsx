"use client";
import { NAV_LINKS } from "@/constant";k
import Image from "next/image";j
import Link from "next/link";jk
import Button from "./Button";k
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);j
  const toggleMenu = () => setMenuOpened(!menuOpened);j
  return (
    <nav className="flexBetween max-container px-12 z-30 py-2 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]">
      <Link href="/" className="bold-28">
        <span>TRAVELRS</span>
      </Link>
      {/* DESKTOP */}
      <ul className="hidden lg:flex h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-2 mx-8 relative text-gray-50 group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>
      <div className="hidden lg:block">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_rounded"
        />
      </div>
      {/* MOBILE */}
      {!menuOpened ? (
        <Image
          src="menu.svg"hu
          alt="menuicon"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="close.svg"
          alt="menuicon"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      <ul className={menuOpened ? "flex flex-col justify-center p-12 fixed top-14 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md" : "flex flex-col justify-center p-12 fixed top-14 right-[-100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-1 m-6 relative text-gray-50 group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
