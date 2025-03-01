"use client";

import Navbar from "@/components/navbar/navbar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <div className="p-spacing-l">{children}</div>
    </main>
  );
};

export default MainLayout;
