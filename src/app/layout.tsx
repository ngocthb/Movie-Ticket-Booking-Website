import "./globals.css";

export const metadata = {
  title: "Netflix - Enjoy your favorite movies",
  icons: "/netflix.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
