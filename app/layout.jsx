import { Manrope } from "next/font/google";
const { default: Navbar } = require("../components/navbar");
const { default: SubNavbar } = require("../components/sub-navbar");
import "./globals.css";

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "STYLIZED",
  description: "Match your style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <nav className="flex flex-col-reverse lg:flex-col lg:fixed z-10 w-full">
          <SubNavbar />
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
