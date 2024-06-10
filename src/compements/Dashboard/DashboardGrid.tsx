import { ReactNode } from "react";

const DashboardGrid = () => {
  return (
    <div className="flex gap-3 py-5 w-full">
      <BoxWrapper>a</BoxWrapper>
      <BoxWrapper>a</BoxWrapper>
      <BoxWrapper>a</BoxWrapper>
      <BoxWrapper>a</BoxWrapper>
    </div>
  );
};

export default DashboardGrid;

function BoxWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-sm flex-1 p-12 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
