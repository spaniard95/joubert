import Link from "next/link";
import { CustomNavigationMenu } from "../(components)/navigation-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-8">
        <CustomNavigationMenu />
      </div>
      {children}
    </>
  );
}
