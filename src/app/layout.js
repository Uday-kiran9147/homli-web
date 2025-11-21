import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Homli | house organizer",
  description:
    "Manage groceries, chores, bills & calendars for multiple households in one app.",
  icons: {
    icon: "app-icon.png",        
    shortcut: "/icon.png",    
    apple: "/icon.png",       
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
