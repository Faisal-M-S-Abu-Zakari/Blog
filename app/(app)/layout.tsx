import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dashboard - Faisal's Blog",
  description: "Manage your blog content and settings",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
