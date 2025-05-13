"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        height: "80px",
        padding: "0 24px",
        borderBottom: "1px solid #111",
      }}
      className="flex justify-between items-center px-6 py-4 border-b"
    >
      <h1
        style={{ color: "#111", fontFamily: "pretendard", fontSize: "24px" }}
        className="text-xl font-bold "
      >
        AWESOME FOOD STORE
      </h1>
      <nav className="space-x-4 flex flex-row gap-[10px] text-[#111] underline underline-offset-4">
        <Link href="/about">ABOUT</Link>
        <Link href="/">STORE</Link>
      </nav>
    </header>
  );
};

export default Header;
