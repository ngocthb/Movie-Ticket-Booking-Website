"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer  flex flex-col items-center gap-4 p-6 ">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-bold  text-white"
      >
        <img src="/netflix.svg" alt="logo" className="h-8" />
        <span>Netflix</span>
      </Link>
      <aside>
        <p className="text-gray-400">©2025Ngocthb</p>
      </aside>
      <nav className="text-gray-600 grid-flow-col gap-4">
        <a className="link link-hover" href="#">
          License
        </a>
        <a className="link link-hover" href="#">
          Help
        </a>
        <a className="link link-hover" href="#">
          Contact
        </a>
        <a className="link link-hover" href="#">
          Policy
        </a>
      </nav>
      <div className="flex h-5 gap-4 ">
        <a
          href="https://github.com/ngocthb"
          className="link text-gray-700"
          aria-label="Github Link"
        >
          <Icon icon="tabler:brand-github" className="size-5" />
        </a>
        <a href="#" className="link  text-gray-700" aria-label="Facebook Link">
          <Icon icon="tabler:brand-facebook" className="size-5" />
        </a>
        <a href="#" className="link  text-gray-700" aria-label="X Link">
          <Icon icon="tabler:brand-x" className="size-5" />
        </a>
        <a href="#" className="link  text-gray-700" aria-label="Google Link">
          <Icon icon="tabler:brand-google" className="size-5" />
        </a>
      </div>
    </footer>
  );
}
