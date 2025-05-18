import { Metadata } from "next";
import dynamic from "next/dynamic";

const DashBoard = dynamic(() => import("../../components/dashboard/DashBoard"));
export const metadata: Metadata = {
  title: "DashBoard",
};

const DashBoardPage = () => {
  return (
    <main className="h-[100vh] w-[100vw]">
      <DashBoard />
    </main>
  );
};

export default DashBoardPage;
