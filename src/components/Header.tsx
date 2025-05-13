"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center h-[60px] md:h-[80px]"
      style={{ fontFamily: "pretendard", padding: "24px" }}
    >
      <h1 className="text-lg md:text-2xl font-bold text-[#111]">
        AWESOME FOOD STORE
      </h1>
      <nav className="flex gap-4 text-[#111] underline underline-offset-4 text-sm md:text-base">
        <Link href="/about">ABOUT</Link>
        <Link href="/">STORE</Link>
      </nav>
    </header>
  );
};

export default Header;
