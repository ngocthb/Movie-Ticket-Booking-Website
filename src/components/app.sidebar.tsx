"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmModal from "./confirm.modal";
import { MenuItem } from "@/types/menuItem";

export default function Sidebar({ menuItems }: { menuItems: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleConfirm = () => {
    setIsOpen(false);
    toast.success("Đăng xuất thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto rounded-md bg-neutral-900">
          <Link href="/" className="flex items-center ps-2.5 py-6">
            <img
              src="/netflix.svg"
              className="h-8 me-3 sm:h-9"
              alt="Netflix Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              Netflix
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href; // So sánh trực tiếp với href

              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive
                        ? "border-r-4 border-red-600 rounded-none"
                        : "rounded-l-lg"
                    } flex items-center p-2 rounded-lg hover:bg-gray-50 hover:text-black group`}
                  >
                    {item.icon}
                    <span className="ms-3">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="absolute bottom-0 w-full left-0 flex items-center justify-center p-4"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/1f/e3/e1/1fe3e1af8302eaa73284484088a521e4.jpg')",
            }}
          >
            <button
              className="btn glass hover:bg-red-800 hover:text-white transition duration-300"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </aside>
      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        text="Are you sure you want logout?"
        icon="warning"
      />
      <ToastContainer />
    </>
  );
}
