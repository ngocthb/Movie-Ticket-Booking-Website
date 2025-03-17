"use client"; // Đảm bảo đây là Client Component

import Footer from "@/components/app.footer";
import Sidebar from "@/components/app.sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomerItem } from "@/constants/menuItems";
import { useEffect, useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Chỉ render khi component đã mounted để tránh lỗi hydration
  if (!hasMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-[100vh]">
        <div className="flex flex-1">
          <Sidebar menuItems={CustomerItem} />

          <main className="flex-1 p-4 sm:ml-64 min-h-0">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              {children}
            </div>
          </main>
        </div>

        <Footer />

        {/* ToastContainer sẽ không gây lỗi hydration */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
