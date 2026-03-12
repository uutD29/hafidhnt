import type { Metadata } from "next";
import { Poppins, Ephesis } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ephesis",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hafidh Nurhaqqi Tarbani",
  description:
    "Portofolio Hafidh Nurhaqqi Tarbani, Sales Professional & Business Development Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${ephesis.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}