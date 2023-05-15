import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PeopleFinder (146824)",
  description: "CPT411 Assignment 1",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="winter"
      className="bg-[url('/bg.png')] bg-cover"
      lang="en"
    >
      <body className="m-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
