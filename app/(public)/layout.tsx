import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarServer from "@/components/NavbarServer";

export const metadata: Metadata = {
  title: "Public Pages - Faisal's Blog",
  description:
    "Public pages of Faisal's Blog including about and blog sections",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarServer />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
