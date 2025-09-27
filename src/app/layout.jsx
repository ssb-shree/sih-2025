import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "TimeTable Generator NEP 2020",
  description: "generate custom timetable for nep 2020",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="retro">
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
